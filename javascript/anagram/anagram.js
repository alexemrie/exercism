module.exports = function(word) {
  return {
    matches: function(arrayOfWords) {
      var result = [];
      for (var i = 0; i < arrayOfWords.length; i++) {
        var sortedWord = arrayOfWords[i].toLowerCase().split("").sort().join();
        var originalWordSorted = word.toLowerCase().split("").sort().join();
        if (sortedWord === originalWordSorted) {
          result.push(arrayOfWords[i]);
        }
      }
      return result;
    }
  };
}
