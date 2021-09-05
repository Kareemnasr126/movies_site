var myHttp = new XMLHttpRequest();
var allPosts = [];

myHttp.open('GET', 'https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50');
myHttp.send();

console.log(myHttp.readyState);
myHttp.addEventListener('readystatechange', function () {
  console.log(myHttp.readyState);

  if (myHttp.readyState == 4 && myHttp.status == 200) {
    allPosts = JSON.parse(myHttp.response).results;
    displayPosts();
  }
});


function displayPosts() {

  var cartoona = ``;

  for (var i = 0; i < allPosts.length; i++) {


    cartoona += `   <div class="col-md-4">
    <div class="post">
      <img class="w-100" src="https://image.tmdb.org/t/p/w500${allPosts[i].poster_path}"/>
        <h3>${allPosts[i].title}</h3>
        <p>${allPosts[i].overview}</p>
    </div>
</div>`;
  }


  document.getElementById('postsContainer').innerHTML = cartoona;
}






/*


// myHttp.readyState = 0; //connection not stablished
// myHttp.readyState = 1; //connection  stablished
// myHttp.readyState = 2; //recieved
// myHttp.readyState = 3; //data proccessing
// myHttp.readyState = 4; //data ready

// myHttp.status = 404 // page not found;
// myHttp.status = 403 // forbidden;
// myHttp.status = 200 // forbidden;


GET => fetch Data
POST => send data (signin , register , add , )
DELETE => delete data
PUT =>
PATCH =>
*/