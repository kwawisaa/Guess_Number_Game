const minimumNumber=1;
const maximumNumber=100;

const lbl=document.getElementById("lbl");
const txt=document.getElementById("txt");
const homeBtn=document.getElementById("homeBtn");
const submitBtn=document.getElementById("submitBtn"); 
const restartBtn=document.getElementById("restartBtn");
const rslt=document.querySelector(".gRecordBox");

let number=Math.floor(Math.random()*(maximumNumber-minimumNumber+1))+minimumNumber;//Generates a random number from 1-100.
let attempts=0;
let isRunning=true;


homeBtn.onclick=function(){
    window.location.href="guessNumber.html";
}

submitBtn.onclick=function(){
    
let guess=Number(txt.value);

    if (!isRunning) return;

    if(isNaN(guess)||guess<minimumNumber||guess>maximumNumber){//If the user input is not a number or is outside the valid range.
        rslt.textContent=`Invalid Input!\nPlease enter a number between 1 and 100`;
        return;

    }
    attempts++;
    if(guess===number){
        rslt.textContent=`Your guess is right! It took you ${attempts} attemp(s)`;
        txt.disabled=true;
        submitBtn.disabled=true;
        isRunning=false;

    }else if(guess<number&&number-guess<9){//If guess is less than the number, but not more than 9 lower.
        rslt.textContent=`Your guess is a bit low`;

    }else if(guess<number){
        rslt.textContent=`Your guess is too low`;

    }else if(guess>number&&guess-number<=9){//If guess is greater than the number, but not more than 9 higher or exactly 9.
        rslt.textContent=`Your guess is a bit high`;

    }else if(guess>number){
        rslt.textContent =`Your guess is too high`;
    }
}
    /*NOTE: The "bit low" or "too low" and "bit high" or "too high" messages give users helpful hints 
    when their guess is close to the correct number, but not quite there.This is to improve their game play.*/

restartBtn.onclick=function(){//This allows users to restart the game.
    attempts = 0;
    isRunning = true;
    txt.disabled = false;
    submitBtn.disabled = false;
    txt.value = "";
    rslt.textContent = `Game restarted!\nEnter your guess!`;
    number=Math.floor(Math.random()*(maximumNumber-minimumNumber+1))+minimumNumber;
}


