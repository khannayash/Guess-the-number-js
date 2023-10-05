let y = Math.floor(Math.random()* 10 + 1 );

let guess =  1;

document.getElementById("submitguess").onclick = function() {

let x = document.getElementById("guessField").value ;

if (x == y) {
    alert("CONGRATULATIONS!!!! YOU GUESSED IT RIGHT IN" + guess + "  GUESS ")
    
}

else if (x > y) {
    guess++;    
    alert("OOPS NUMBER IS TOO BIG TRY A SMALLER NUMBER ")
    
}

else{
guess++;
alert("OOPS TRY A BIGGER NUMBER ITS TOO SMALL ")

}

}