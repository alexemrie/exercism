//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};


Bob.prototype.hey = function(input) {
  var isAlphabetical = /[a-zA-Z]/.test(input);

  if (input.trim() ==="") {
    return "Fine. Be that way!"
  } else if (input.toUpperCase()=== input && isAlphabetical) {
    return 'Whoa, chill out!'
  } else if (input.slice(-1)==="?" || (input.slice(-1)==="?" && isAlphabetical)){
    return 'Sure.'
  } else {
    return 'Whatever.'
  }
};

// Bob.prototype.hey = function(input) {
//   var output;
//   if (input.trim().length === 0) {
//     output = "Fine. Be that way!";
//   } else if (input.toUpperCase() === input && input.match(/[A-z]/)) {
//     output = "Whoa, chill out!";
//   } else if (input.charAt(input.length - 1) === '?') {
//     output = 'Sure.';
//   } else {
//     output = 'Whatever.';
//   }
//
//   return output;
// };



module.exports = Bob;
