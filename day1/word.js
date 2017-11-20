word = function (word) {

	word = word.toLowerCase().replace(/[^a-z0-9 ]/g, "");

	if (!word || word == "") {
		return {};
	}

  let words = word.trim().split(/\s+/g);
  let retObject = {};

  words.forEach((word) => {
  	word = word.trim();
    retObject[word] = retObject.hasOwnProperty(word) ? retObject[word]+1 : 1;
  });
  return retObject;
}
//console.log(word("This      is   andela"))
module.exports = word;
