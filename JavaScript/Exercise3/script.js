var num = prompt("Guess a number: ");

while(num != 7) {
  if(num < 7) {
    alert("Too low! Try again");
    num = prompt("Guess a number: ");
  }
  else if (num > 7) {
    alert("Too high! Try again");
    num = prompt("Guess a number: ");
  }
}
alert("You guessed it!!");
