module.exports = function reverse (n) {
  let str = Math.abs(parseInt(n)).toString();
  
  let arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
      arr.push(str[i]);
  }

  let result = arr.join('');
  return parseInt(result.toString());
}
