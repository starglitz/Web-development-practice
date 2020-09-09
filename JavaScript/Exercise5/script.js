function printReverse(someArray) {
  for(var i = someArray.length-1; i>=0; i--) {
      console.log(someArray[i]);
  }
}

printReverse([1,2,3,4,5]);


function isUniform(arr) {
  first = arr[0];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] !== first) {
      return false;
    }
  }
  return true;
}

a = isUniform([1,1,1,2]);
console.log(a);
