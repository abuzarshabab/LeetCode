/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
  let shuffledString = ''
  for(let iterator = 0; iterator < indices.length; iterator++) {
      shuffledString = shuffledString + s[indices[iterator]]
      console.log(indices[iterator])
  }
  return shuffledString
};