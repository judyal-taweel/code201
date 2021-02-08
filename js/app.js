'use strict';

let confirmUser = confirm('do you like movies?');
console.log(confirmUser);


if (confirmUser){ // 
  alert('welcome to the movies page');
}
else{
  alert('omg');
}
let myBool = false;
let anotherBool = false;
let thirdBool = true;


if (myBool && anotherBool) { // false
  console.log('myBool and thirdBool were both true');
} // only one of these have to be true
else if (myBool || anotherBool) { // false
  console.log('My bool or anotherBool was true!');
} // only thirdBool can be true
else if (myBool) { // F
  console.log('myBool and anotherBool were false, but thirdBool was true.');
} // none of the above conditions were true
else { // default case
  console.log('Were any of my variables true?');
}

let userName = prompt('whats your name?');
alert(`hello ${userName} my name is judy I am happy to meet you` )
console.log(userName);


let myfavDrink = 'tea';
let yourDrink = prompt('what is your fav drink?');
if(yourDrink.toLowerCase() === myfavDrink){
  alert('I like tea also ');
}else {
  alert('I don\'t like it');
}
console.log(myfavDrink);




let userAge = prompt('Are you greater than 20 years?');
if (userAge ==='yes' || userAge ==='y'){
alert('thats fine')
} else if(userAge ==='no' || userAge ==='n'){
  alert('thats good')
}
console.log(userAge);

let userTravel = prompt('have you ever travel?');
if(userTravel === 'yes' || userTravel === 'y'){
    alert('thats so good')
}else if (userTravel === 'no' || userTravel === 'n'){
    alert('I hope you travel')
}
console.log(userTravel);


let userColor = prompt('do you like red color?');
if (userColor === 'yes' || userColor === 'y'){
    alert('you same with me')
}else if(userColor === 'no' || userColor === 'n'){
    alert('ooh I like this color')
}
console.log(userColor);


let userProg = prompt('do you like programing?');
if(userProg === 'yes' || userProg === 'y'){
    alert('me too')
}else if(userProg === 'no' || userProg === 'n'){
    alert('you must like it')
}
console.log(userProg);


let userDrink = prompt('Did you drink water today?');
if(userDrink === 'yes' || userDrink === 'y'){
    alert('thats good')
}else if(userDrink === 'no' || userDrink === 'no'){
    alert('go to drink water now')
}
console.log(userDrink);

alert(userName)

   