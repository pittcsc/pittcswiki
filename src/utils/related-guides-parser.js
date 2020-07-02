// Gatsby cant handle YAML with nested objects, so instead
// related links look like
// ---
// title: "Scheduling Classes"
// related:
//   ["Stats Major", "./majors/stats", "asd", "Course Explorer", "/courses/"]
// so we parse them into [{link: "/majors/stats/", title: "Stats"}, ...]
// and do error handling
// ---
export default function (relatedLinks) {
  const links = []

  if (!relatedLinks || !relatedLinks.length || relatedLinks.length % 2 !== 0) {
    return links
  }

  for (let i = 0; i < relatedLinks.length; i += 2) {
    links.push({ title: relatedLinks[i], link: relatedLinks[i + 1] })
  }

  return links
}
