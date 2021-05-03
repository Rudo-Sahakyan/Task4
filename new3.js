let num = 18;
let lastDigit = num % 10;
if (num < 10 || lastDigit === 0) {
  console.log(num);
} else {
  num = parseInt(num / 10);
  num = lastDigit + "" + num;
  console.log(num);
}
