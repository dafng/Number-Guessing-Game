// Number Guessing Game

const minNum = 1;
const maxNum = 50;
const answer = Math.floor(Math.random() * (maxNum - minNum +1) +minNum ); //generate a random number

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number from ${minNum} to ${maxNum}!`);
    guess = Number(guess); //type cast the guess from string to number

    //check if the answer is not a number
    if(isNaN(guess)){
        window.alert("Please enter a number");
    }

    //check if the answer is not a number between the requested range of numbers
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a number within the range");
    }
    
    else{
        attempts++;
        if(guess > answer){
            window.alert("Too HIGH! Try again!");
        }
        else if (guess < answer){
            window.alert("Too LOW! Try again!");
        }
        else{
            window.alert(`${answer} is CORRECT! It took you ${attempts} attempts to guess it!`);
            running=false;
        }
    }
    
}