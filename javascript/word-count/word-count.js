var words = function(string) {
  var wordCount = {};
  var wordArray = string.split(/\s+/g);

  wordArray.reduce(function(prevWord, currWord) {
    if (wordCount[currWord] === undefined || currWord === "toString") return wordCount[currWord] = 1;
    return wordCount[currWord]++;
  }, wordCount);

  return wordCount;
};

module.exports = words;
