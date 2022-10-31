/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
  let shuffledArray = [];
  let shuffledString = ''
  for(let i = 0; i < indices.length; i++) {
      shuffledArray[indices[i]] = s[i]
  }   
  shuffledArray.forEach( char => {
      shuffledString += char
  })
  return shuffledString
};