const reverseInt = (num) => {
  let numToStr = String(Math.abs(num));
  let reversedStr = '';
  
  for (let i = numToStr.length - 1; i >= 0; i--) {
    reversedStr += numToStr[i];
  }
  
  strToNum = Number(reversedStr);
  
  return num < 0 ? -strToNum : strToNum;
}

console.log(reverseInt(8900));
console.log(reverseInt(-123));