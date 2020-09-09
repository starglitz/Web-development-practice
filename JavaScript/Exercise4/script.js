function isEven(number) {
  if(number % 2 == 0) {
    return true;
  }
  else{
    return false;
  }
}

function factorial(number) {
  fact = 1;
  while(number !=0) {
    fact = fact * number;
    number--;
  }
  return fact;
}

function kebabToSnake(word) {
  newWord = word.replace(/-/g, "_");
  return newWord;
}
