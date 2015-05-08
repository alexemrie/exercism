var compute = function(strand1, strand2) {
  if (strand1.length !== strand2.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  var strandA = strand1.split(""),
      strandB = strand2.split("");

  var count = 0;

  for(var i in strandA) {
    if (strandA[i] !== strandB[i]) count ++;
  }

  return count;
};

module.exports = {
  compute: function(strand1, strand2) {
    return  compute(strand1, strand2)
  }
};
