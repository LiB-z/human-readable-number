module.exports = function toReadable (number) {
  let counter = Math.floor(Math.log(number) / Math.log(10));
  let result = [];
  let alph = [
    {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"},
    {10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"}, 
    {2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety"}, 
  ]
  if (number == 0) {
    return "zero"
  } 
  for( let i = counter; i >= 0; i--) {
    let current = number.toString()[counter-i];
    let next = number.toString()[counter];
    let decim = number.toString().slice(-2);
    if (i == 0) {
      console.log("единицы " + current);
      if (current > 0 && current < 10 && decim < 10 || decim > 19) {
        result.push(alph[i][current])
      } 
    } else if (i == 1) {
      console.log("десятки " + current);
      if (decim >= 0 && decim <= 9) {
        continue
      } else if (decim > 9 && decim < 20 && decim !== 0) {
        result.push(alph[i][decim])
      } else if (decim >= 20 && decim < 100) {
        result.push(alph[i+1][current]);
      } 
    } else if (i == 2) {
      console.log("сотни " + current);
      result.push(alph[i-2][current] + " hundred");

    } else if (i === 3) {
      console.log("тысячи " + current);
      result.push(alph[i-3][current] + " thousand");
    }
  }
  return result.join(' ').trim() 
}