/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
  let parsedString = '';
  for(let i = 0; i < command.length; i++) { 
      if(command[i] === 'G') {
          parsedString += 'G'
      } else if(command[i] === '(' && command[i+1] == ')') {
          parsedString += 'o'
          i += 1
      } else if (command[i] === '(' && command[i+1] ==='a') {
        parsedString += 'al'
          i += 3
      }
  }
  return parsedString
};

const cmd = interpret("G()(al)")
console.log(cmd)