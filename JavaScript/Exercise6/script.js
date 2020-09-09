var movies = [ {
  title: "In Bruges",
  rating: 5,
  hasWatched: true
},
{
  title: "Frozen",
  rating: 4.5,
  hasWatched: false
},
{
  title: "Mad Max",
  rating: 4,
  hasWatched: false
}

];


for (var i = 0; i < movies.length; i++) {
  if(movies[i].hasWatched == true) {
    console.log("You have watched: " + movies[i].title + ". Rating: " + movies[i].rating + " stars.");
  }
  else if(movies[i].hasWatched == false) {
    console.log("You have not seen: " + movies[i].title + ". Rating: " + movies[i].rating + " stars.");
  }
}
