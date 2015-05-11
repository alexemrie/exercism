// var words = function(string) {
//   var wordCount = {};
  // var wordArray = string.split(/\s+/g);
//
//   wordArray.reduce(function(prevWord, currWord) {
//     if (wordCount[currWord] === undefined || currWord === "toString") return wordCount[currWord] = 1;
//     return wordCount[currWord]++;
//   }, wordCount);
//
//   return wordCount;
// };

var words = function(string) {
  var brokenUp = string.split(/\s+/g);
  var output = {};

  brokenUp.forEach(function(word) {
    output[word] = (Number(output[word]) || 0) + 1;
  });

  return output;
};

module.exports = words;
