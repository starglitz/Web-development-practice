// var answer = prompt("What would you like to do?");
// var list = [];
//
// while(answer != "quit") {
//
//   if(answer == "new") {
//     var newToDo = prompt("Enter new chore:");
//     list.push(newToDo);
//   }
//   else if(answer =="list") {
//     console.log(list);
//   }
//
//   var answer = prompt("What would you like to do?");
// }

var answer = prompt("What would you like to do?");
var list = [];


while(answer !="quit") {
  if(answer =="new") {
    var newToDo = prompt("enter new chore: ");
    list.push(newToDo);
    console.log("Added new chore: " + newToDo);
  }
  else if(answer=="list") {
    list.forEach(function(chore, i) {
      console.log("0" + i+ ": " +chore);
      count++;
    });
  }

  var answer = prompt("What would you like to do?");
}
