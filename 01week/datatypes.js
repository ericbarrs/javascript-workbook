'use strict'
let num1 = 1;
let num2 = 2;
const string1 = '1';
const dataType = 3;

time();
stringToNumber(string1);
numberToString(num1);
console.log(whatDataType(dataType));
console.log(addTwoNumber(num1, num2));
console.log(bothTrue());
console.log(oneTrue());
console.log(bothFalse());

function stringToNumber(string1) {
  const string = parseInt(string1);
  console.log(typeof(string), string);
  return
}

function numberToString(num1) {
  const num = num1.toString();
  console.log(typeof(num), num);
  return
}

function whatDataType() {
  return 'this data type is a',
  typeof(dataType);
}

function time() {
  const y = new Date();
  const year = y.getFullYear();

  const mon = new Date();
  const month = mon.getMonth();

  const d = new Date();
  const day = d.getDate();

  const h = new Date();
  let hour = h.getHours();

  const m = new Date();
  const min = m.getMinutes();

  if (hour > 12) {
    hour -= 12;
    console.log(hour, min, 'pm');
  } else {
    console.log(hour, min, 'am');
  }
}

function addTwoNumber(num1, num2) {
  return num1 + num2;
}

function bothTrue() {
  if (num1 && num2) {
    return true;
  } else {
    return false;
  }
}

function oneTrue() {
  if (num1 || num2) {
    return true;
  } else {
    return false;
  }
}
function bothFalse() {
  if (!num1 && !num2) {
    return true;
  } else {
    return false;
  }
}
