let n = +prompt("Введите номер задания от 1 до 5", 5);

function task1() {
  let a = 5,
    b = true,
    c = "java script",
    d = "100";
  console.log(a, b, c, d);
}

function task2(userName) {
  let greeting = "Hello, ";
  console.log(greeting, userName)
  return console.log(greeting, userName);
}

function task3() {
  let min = prompt("enter minutes, 60");
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

function task4() {
  let num = 5;
  for (; num <= 50; num++) {
    if (num % 5 === 0) 
    console.log(num);
  }
}
function task5(limit1, limit2) {
   let mult = 1;
   for (let i = limit1; i<=limit2; i++){
    mult = mult * i;
   }
   return console.log(mult);
}

switch (n) {
  case 1:
    task1();
    break;
  case 2:
    let userName = prompt("user name ");
    task2(userName);
    break;
  case 3:
    task3();
    break;
  case 4:
    task4();
    break;
  case 5:
    let limit1 = +prompt("Введите минимальное число ");
   let limit2 = +prompt("Введите максимальное число ");
    task5(limit1, limit2);
    break;
}