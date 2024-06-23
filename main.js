//javaScript for Website

let menustate = 0;
let profileBody= document.getElementById("profile-body");

//profile body icon open-close

function  profile() {
  if(menustate === 0){
    menustate = 1;
    profileBody.style.display = "block";
  }
  else {
    menustate = 0;
    profileBody.style.display = "none";
  }
}


const chooseFile = document.getElementById("choose-file");
  const imgPreview = document.getElementById("img-preview");
  
  chooseFile.addEventListener("change", function () {
  getImgData();
});

function getImgData() {
  const files = chooseFile.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      imgPreview.style.display = "block";
      imgPreview.innerHTML = '<img src="' + this.result + '" />';
    });    
  }
}


let ChangeDisplay = document.getElementById("change-body");

function changeFon() {
  ChangeDisplay.style.display = "block";
}

function changeFoff() {
  ChangeDisplay.style.display = "none";
}


function change(){
  let name = document.getElementById("Name").value;
let phone = document.getElementById("phone").value;
let nameText = document.getElementById("username");
let phoneText = document.getElementById("UserPhoneNumber");

nameText.innerHTML = name;
phoneText.innerHTML = phone;
ChangeDisplay.style.display = "none";
}


 let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 3000); 
}

let audio = document.getElementById("song-s");
let allowDisplay = document.getElementById("allow-display");

function  allow() {
 allowDisplay.style.display = "none";
 audio.play();
}
function  deny() {
 allowDisplay.style.display = "none";
}