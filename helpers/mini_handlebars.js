// Did not feel like using https://handlebarsjs.com/,
// this does similar thing

const LEFT_BAR = "{{"
const RIGHT_BAR = "}}"

// I think this is a pretty good real world ish interview question

// We assume nothing is wrong with the template, to reduce having to check for errors lol
module.exports = function replaceTemplate(template, data) {
  let newString = ""
  for (let i = 0; i < template.length; i++) {
    const char = template[i]
    const nextChar = template[i + 1]
    if (char + nextChar === LEFT_BAR) {
      let foundRightBar = false
      let c = 2 // {{ name }}
      let key = ""
      while (!foundRightBar) {
        const currentIndex = i + c
        const templateChar = template[currentIndex]
        const nextTemplateChar = template[currentIndex + 1]
        const currentTwoChars = templateChar + nextTemplateChar
        if (currentTwoChars === RIGHT_BAR) {
          const result = data[key.trim()]
          if (!result) {
            console.error("Cannot find", key, " in data! Index=", i)
          } else {
            newString += result
          }
          foundRightBar = true
        } else {
          key += templateChar
        }
        c++
        if (c > 100) {
          console.error("Does this key end?? Current key:", key, "Index=", i)
          break
        }
      }
      i += c
    } else {
      newString += char
    }
  }
  return newString
}
