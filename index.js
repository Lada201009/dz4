let n = +prompt("Введите номер задания от 1 до 5", 5);
function Task1() {
  let a = 5,
    b = true,
    c = `java script`;
  d = "100";
  console.log(a, b, c, d);
}
function Task2() {
  let greeting = "Hello, ";
  let userName = prompt(`user name `);
  console.log(greeting, userName);
  alert(`Hallo, ${userName}`);
}
function Task3() {
  let min = prompt(`enter minutes, 60`);
  if (min >= 0 && min <= 14) {
    alert("В первую четверть.");
  }
  else if (min >= 15 && min <= 30) {
    alert("Во вторую четверть.");
  }
  else if (min >= 31 && min <= 45) {
    alert("В третью четверть.");
  }
  else {
    alert("В четвертую четверть.");
  }
}
function Task4() {
  let num = 5;
  for (; num <= 50; num++) {
    if (num % 5 === 0) 
    console.log(num);
  }
}
function Task5() {
  let limit1 = prompt("Введите минимальное число ");
   let limit2 = prompt("Введите максимальное число ");
   let mult = 1;
   for (let i = limit1; i<=limit2; i++){
    mult = mult * i;
   }
   console.log(limit1, limit2);
   console.log(mult);
   alert(mult);
   return mult;
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