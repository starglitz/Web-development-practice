var answer = prompt("What would you like to do?");
var list = [];

while(answer != "quit") {

  if(answer == "new") {
    var newToDo = prompt("Enter new chore:");
    list.push(newToDo);
  }
  else if(answer =="list") {
    console.log(list);
  }
  // else if(answer =="") {
  //   alert("You can't enter an empty string");
  // }
  // else {
  //   console.log("That is not an option!!!");
  // }
  var answer = prompt("What would you like to do?");
}
