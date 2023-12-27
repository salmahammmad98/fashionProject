function toggleDarkMode() {
  var body = document.body;

  // Toggle dark mode class on the body
  body.classList.toggle("dark-mode");
}



var gallery = Array.from(document.getElementsByClassName("imggg"));
var backgroundImg = document.querySelector(".show-photo");
var container = document.getElementById("containerr");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var close = document.querySelector(".exit");
var currentIndex;

for (var i = 0; i < gallery.length; i++) {
  gallery[i].addEventListener("click", Showflex);
}
function Showflex(e) {
  container.style.display = "flex"; //اول طريقه
  //container.setAttribute("style", "display :flex"); //تاني طريقه
  var imgSrc = e.target.getAttribute("src");
  backgroundImg.style.backgroundImage = `url(${imgSrc})`;

  currentIndex = gallery.indexOf(e.target);
  //console.log(cuurentIndex);
}

next.addEventListener("click", getNextPhoto);

function getNextPhoto() {
  currentIndex++;
  if (currentIndex == gallery.length) {
    currentIndex = 0;
  }

  var nextImg = gallery[currentIndex].getAttribute("src");
  backgroundImg.style.backgroundImage = `url(${nextImg})`;
}
prev.addEventListener("click", getPrevPhoto);

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    getPrevPhoto();
  } else if (event.key === "ArrowRight") {
    getNextPhoto();
  } else if (event.key === "Escape") {
    closeGallery();
  }
});

function getPrevPhoto() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = gallery.length - 1;
  }
  var prevImg = gallery[currentIndex].getAttribute("src");
  backgroundImg.style.backgroundImage = `url(${prevImg})`;
}
close.addEventListener("click", closeGallery);
function closeGallery() {
  container.style.display = "none";
  //container.setAttribute("style", "display :none"); //تاني طريقه
}

document.addEventListener("DOMContentLoaded", function () {
  var headingElement = document.querySelector('.heading1');
  
  // Add a class to trigger additional CSS animations or styles
  headingElement.classList.add('additional-animation');
});


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconLose = document.querySelector('.icon-close');
const emailFild = document.getElementById("email-fild");
const passwordFild = document.getElementById("password-fild");
const emailError = document.getElementById("email-error");
const passwordInput = document.getElementById('Password');
const errorPassword = document.getElementById("error-password");



registerLink.addEventListener('click' , ()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click' , ()=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click' , ()=>{
    wrapper.classList.add('active-popup');
});
iconLose.addEventListener('click' , ()=>{
    wrapper.classList.remove('active-popup');
});

function validateEmail()
{
  if(!emailFild.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
   {

        emailError.innerHTML="Please enter a valid email";
        emailFild.style.borderBottomColor = "red";
        return false;
   }
   emailError.innerHTML = "";
   emailFild.style.borderBottomColor = "green";
   return true;
}



function validatePassword(password) {
  
  if (passwordFild.value.length < 8) {
    errorPassword.innerHTML ="invalid password";

    
  }
  else{
    errorPassword.innerHTML ="valid password";
  }
  

}
