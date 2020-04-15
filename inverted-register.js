const invertCase = (str) => {
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    result += (str[i] === str[i].toUpperCase()) ? str[i].toLowerCase() : str[i].toUpperCase();
  }
  
  return result;
}

console.log(invertCase('AbbA'));