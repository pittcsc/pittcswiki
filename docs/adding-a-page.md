Basically, any new markdown file you add in `src/pages` will be viewable and the file path will be the url. For example

`guides/jawn.md` will be viewable at `<site url>/guides/jawn`

How this works under the hood is Gatsby parses the markdown files, and then in `gatsby-node.js`, it creates pages. A page needs
a template. In the case of courses, it uses the `src/components/courses-template.js` file, which does special things like fetch
data from a Google Sheet. Simpler files, like a Stat Minor guide can just be placed as a markdown file.

# Important

"Frontmatter" is a beginning of a markdown file which is used to identify special attributes of a post.

```
---
title: Stats Minor
---

# How to start
... content
```

The front matter is the part between the `---`.

# TLDR

Add markdown files in the `pages` folder for them to be viewable as pages.
