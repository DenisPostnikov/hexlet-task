const areBracketsBalanced = (str) => {
  let countOpenBracket = 0;
  let countCloseBracket = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      countOpenBracket++;
    } else if (str[i] === ')') {
      countCloseBracket++;
    }
  }

  return (countOpenBracket === countCloseBracket) ? true : false;
  
}

console.log(areBracketsBalanced('(())'));  // true
console.log(areBracketsBalanced('((())')); // false