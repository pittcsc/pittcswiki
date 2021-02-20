import React, { useEffect, useState } from "react"
import Slugger from "github-slugger"

const slugger = new Slugger()

const truncate = (word) => {
  if (word.length > 28) return word.substring(0, 18) + "..."
  return word
}

// From underscore.js: https://underscorejs.org/docs/modules/throttle.html
// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function() {
    var _now = new Date().getTime();
    if (!previous && options.leading === false) previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

export default function TableOfContents({ headings }) {
  const [activeHeading, updateActiveHeading] =
      useState(headings.length > 0 ? headings[0] : null);

  const checkForNewActiveHeading = throttle((e) => {
    if (headings.length <= 1) {
      return;
    }

    let newActiveHeading = headings[0];
    for (let i = 1; i < headings.length; i++) {
      const headingElement = document.getElementById(headings[i].id);
      if (headingElement) {
        // Plus 10 to avoid roundoff error when clicking TOC links.
        if (headingElement.offsetTop <= window.scrollY + 10) {
          newActiveHeading = headings[i];
        } else {
          break;
        }
      }
    }

    if (newActiveHeading.id !== activeHeading.id) {
      updateActiveHeading(newActiveHeading);
    }
  }, 200);

  useEffect(() => {
    window.addEventListener('scroll', checkForNewActiveHeading);
    return () => window.removeEventListener('scroll', checkForNewActiveHeading);
  });

  if (!headings || headings.length < 4) return null

  slugger.reset()
  return (
    <ul className="hidden lg:block fixed lg:left-0 list-none ml-0 markdown-toc">
      {headings
        .filter((heading) => heading.depth !== 1)
        .map((heading) => (
          <li
            key={heading.value}
            className={
              heading.id === activeHeading.id ?
                  "font-bold toc-heading-depth-" + heading.depth :
                  "toc-heading-depth-" + heading.depth}
            style={{ marginLeft: heading.depth + "rem" }}
          >
            <a
              className="text-gray-600"
              href={"#" + slugger.slug(heading.value)}
            >
              {truncate(heading.value)}
            </a>
          </li>
        ))}
    </ul>
  )
}
