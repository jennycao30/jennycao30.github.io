
var a =0;

var text = " ";

var puppies = ["https://thehappypuppysite.com/wp-content/uploads/2015/09/The-Siberian-Husky-HP-long.jpg", "https://i.pinimg.com/originals/cd/a5/1b/cda51b70758b5302de57225b7c52a202.jpg", "https://www.insidedogsworld.com/wp-content/uploads/2016/12/husky10.jpg", "https://emborapets.com/wp-content/uploads/2019/02/71379863_m-1024x683.jpg"];
console.log(a);

var toAdd = document.createDocumentFragment();


function upDogs() {
a++;
console.log(a);


if(a == puppies.length){
a = 0;
}
  document.getElementById("myImg").src = puppies[a];

}

function downDogs() {

if(a == 0){
a = puppies.length -1;
}else{
	a--;
}
console.log(a);
  document.getElementById("myImg").src = puppies[a];

}
function randomDog() {
a = Math.floor(Math.random() * puppies.length);
  document.getElementById("myImg").src = puppies[a];
  console.log(a);
}

