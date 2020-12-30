// Did not feel like using https://handlebarsjs.com/,
// this does similar thing

// I think this is a pretty good real world ish interview question

// We assume nothing is wrong with the template, to reduce having to check for errors lol
module.exports = function replaceTemplate(template, data) {
	return template.replace(/{{\s*(\w*)\s*}}/g, (matchArr, key) => {
		const result = data[key.trim()];
		if (!result) {
			console.error("Cannot find", key, " in data! Index=", i);
		} 
		return result;
	})
}
