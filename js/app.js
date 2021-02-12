'use strict';

let score = 0;

function userAge(){ 
    let myAge = prompt('Am I greater than 20 years old?');
    if (myAge.toLowerCase() ==='yes' || myAge.toLowerCase() ==='y'){
alert('thats right')
score++;
} else if(myAge.toLowerCase() ==='no' || myAge.toLowerCase() ==='n'){
  alert('thats wrong')
}else{
    alert('okey')
}
alert('I am 23 years')
}

function userTravel(){
    let myTravel = prompt('did I travel?');
     if(myTravel.toLowerCase() === 'yes' || myTravel.toLowerCase() === 'y'){
    alert('thats right')
    score++;
}else if (myTravel.toLowerCase() === 'no' || myTravel.toLowerCase() === 'n'){
    alert('thats wrong')
}else{
    alert('okey')
}
alert('I love travel')
}

function userColor(){
    let myColor = prompt('do I like red color?');
    if (myColor.toLowerCase() === 'yes' || myColor.toLowerCase() === 'y'){
    alert('thats right')
    score++;
}else if(myColor.toLowerCase() === 'no' || myColor.toLowerCase() === 'n'){
    alert('thats wrong')
}else{
    alert('okey')
}
alert('Ilike red color')
}


function userProg(){
    let myProg = prompt('do I like programing?');
    if(myProg.toLowerCase() === 'yes' || myProg.toLowerCase() === 'y'){
    alert('thats right')
    score++;
}else if(myProg.toLowerCase() === 'no' || myProg.toLowerCase() === 'n'){
    alert('thats wrong')
}else{
    alert('okey')
}
alert('i like programing')
}
function userDrink(){
    let myDrink = prompt('Did I drink water today?');
    if(myDrink.toLowerCase() === 'yes' || myDrink.toLowerCase() === 'y'){
    alert('thats right')
    score++;
}else if(myDrink.toLowerCase() === 'no' || myDrink.toLowerCase() === 'no'){
    alert('thats wrong')
}else{
    alert('okey')
}
alert('water important')
}




let myNum = 7;
function userNum(){
    for(let i= 0; i<=4; i++){
    let guess = prompt('what my faverate number?');

    if(parseInt(guess) === myNum){
        alert('thats right')
        score++;
        break;
    }else if(parseInt(guess) < myNum){
        alert('too low')
    }else if(parseInt(guess) > myNum) {
        alert('too high')
    }else{
        alert('good luck')
    }
}
alert(myNum);
}



let sweet = ['coocki', 'cake','donat','crep']
function userSweet(){
    let found = false;
for(let x=0; x<6; x++){
    let favSweet = prompt('what is my favourite sweet');
     for(let y=0; y<4; y++){
        if(favSweet.toLowerCase() === sweet[y]){
            alert('thats right');
            found = true;
            score++;
            break;
        }
        }
        if(found === true){
            break;
         }
}
}
function Name(){
    let userName = prompt('whats your name?');
alert(`hello ${userName} my name is judy I am happy to meet you` )
alert(userName);
}

userAge();
userTravel();
userColor();
userProg();
userDrink();
userNum();
userSweet();
Name();




document.write(sweet);
alert(`your scores ${score}`);


