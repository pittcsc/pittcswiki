// This turns [guides. minors, stat] into
// ['/guides/', '/guides/minors/', '/guides/minors/stat/']
function breakdownSlugIntoUrls(slug) {
  const parts = slug.split("/").filter((x) => x)

  // This turns [guides. minors, stat] into
  // ['/guides/', '/guides/minors/', '/guides/minors/stat']
  const urls = parts.reduce((acc, current, i) => {
    acc[i] = (acc.slice(-1)[0] || "/") + current + "/"
    return acc
  }, [])

  return urls
}

module.exports = {
  breakdownSlugIntoUrls,
}
