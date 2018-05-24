'use strict'

const  carsInReverse = ['honda', 'lexus' ,'chevy', 'gmc', 'cadillac'];

const carsInArray = (carsInReverse) => {
  for(let i = carsInReverse.length - 1; i >= 0 ; i--){
    console.log(carsInReverse[i]);
  }
}
carsInArray(carsInReverse);
////////////////////////////////////////////////////////////////////////////////

const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}
for(let property in person){
  if(property == 'birthDate'){
    console.log(property + " " + person[property])
  }else{
    console.log(property);
  }
}
////////////////////////////////////////////////////////////////////////////////

let i = 1;
while(i <= 1000){
//  console.log(i);
  i++;
}
////////////////////////////////////////////////////////////////////////////////
let o = 1;
 do{
  // console.log(o);
   o++;
 }
 while(o <= 1000);


// When is a for loop better than a while loop?
// when you need to check check the condition before the loop starts

// What is the difference between a for loop and a for...in loop?
// A for loop - loops through code until a condition is met
// a for/in - loops throught the properties of an object.

//What is the difference between a while loop and a do...while loop?
// A while loop's variable is set outside the loop
// a do while loop uses a different syntax to do something in a loop while
// the condition outside the loop is checked.
