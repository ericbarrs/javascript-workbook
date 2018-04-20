'use strict';
const num1 = 1;
const num2 = 2;
const string1 = '1';
const dataType = 3;

time();

stringToNumber(string1);

numberToString(num1);

whatDataType(dataType);

addTwoNumber(num1,num2);

bothTrue();

oneTrue();

bothFalse();


function stringToNumber(){
  const string = parseInt(string1);
  console.log(typeof(string),string);
}

function numberToString(){
   const num = num1.toString();
   console.log(typeof(num),num);
}

function whatDataType(){
  console.log('this data type is a',typeof(dataType));
}

function time (){
  const y  = new Date();
  const year = y.getFullYear();

  const mon  = new Date();
  const month = mon.getMonth();

  const d  = new Date();
  const day = d.getDate();
  console.log(month,day,year);

  const h = new Date();
  let hour = h.getHours();

  const m = new Date();
  const min = m.getMinutes();

  if (hour > 12){
    hour -= 12;
    console.log(hour,min, 'pm');
  }else{
    console.log(hour,min, 'am');
  }
}

function addTwoNumber (){
  addedNumber = num1 + num2;
  console.log(addedNumber);
}


function bothTrue (){
if(num1 && num2){
  console.log('true');
}else {
  console.log('false');
  }
}

function oneTrue (){
if(num1 || num2){
  console.log('true');
}else {
  console.log('false');
  }
}
function bothFalse (){
if(!num1 && !num2){
  console.log('true');
}else {
  console.log('false');
  }
}
