$("h1").css("color", "red");

$(document).keypress(function(key) {
  $("h1").text(key.key);
});
