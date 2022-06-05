let n = +prompt("Введите число от 1 до 5", 5);
function Task1() {
  let a = 5,
    b = true,
    c = `java script`;
  d = "100";
  console.log(a, b, c, d);
}
function Task2() {
  let greeting = "Hello, ",
    x;
  let userName = prompt(`user name `);
  x = userName;
  console.log(greeting, x);
}
function Task3() {
  let min = prompt(`number `);
  if (min >= 0 && min <= 14) {
    alert("В первую четверть.");
  }
  if (min >= 15 && min <= 30) {
    alert("Во вторую четверть.");
  }
  if (min >= 31 && min <= 45) {
    alert("В третью четверть.");
  }
  if (min >= 46 && min <= 59) {
    alert("В четвертую четверть.");
  }
}
function Task4() {
  let num = 5;
  for (; num <= 50; num++) {
    if (num % 5 === 0) console.log(num);
  }
}
function Task5() {
  let mult = 1;
  for (let i = 5; i <= 12; i++) {
    mult = mult * i;
  }
  console.log(mult);
}

switch (n) {
  case 1:
    Task1();
    break;
  case 2:
    Task2();
    break;
  case 3:
    Task3();
    break;
  case 4:
    Task4();
    break;
  case 5:
    Task5();
    break;
}