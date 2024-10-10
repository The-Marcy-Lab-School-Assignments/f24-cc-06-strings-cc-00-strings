//write your code here

//Problem 1

const reverseString = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

//Problem 2

const reverseZigZagString = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
};
