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


// added section by team member js

var imgs = Array.from(document.querySelectorAll(".item-img img"));
var boxContainer = document.getElementById("boxContainer");
var innerBox = document.getElementById("innerBox");
var Close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var currentIndex = 0 ;
for(var i =0 ; i< imgs.length ; i++){
    imgs[i].addEventListener("click",function(eventInfo){
        boxContainer.style.display= "flex";
        var imgSrc= eventInfo.target.getAttribute("src")
        innerBox.style.backgroundImage= "url("+imgSrc + ")"
        currentIndex = imgs.indexOf(eventInfo.target)
   
     })
}
Close.addEventListener("click",closeSlider)
function closeSlider(){
    boxContainer.style.display = "none";
}
next.addEventListener("click", nextSlider)
function nextSlider(){
    currentIndex++;
    if(currentIndex== imgs.length){
        currentIndex=0
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    innerBox.style.backgroundImage = "url(" + imgSrc + ")"
}
prev.addEventListener("click", prevSlider)
function prevSlider(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=imgs.length -1
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    innerBox.style.backgroundImage = "url(" + imgSrc + ")"
}
document.addEventListener("keyup", function(event){
       
    if(event.code == "ArrowRight"){
        nextSlider()
    }
    else if (event.code == "ArrowLeft"){
        prevSlider()
    }
    else if (event.code == "Escape"){
      closeSlider()
    }
})







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