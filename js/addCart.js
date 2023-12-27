var myHttp = new XMLHttpRequest();
var allPosts;

myHttp.open("GET", "https://fakestoreapi.com/products");
myHttp.send();

myHttp.addEventListener("readystatechange", function () {
  if (myHttp.readyState == 4 && myHttp.status == 200) {
    allPosts = JSON.parse(myHttp.responseText);
    displayChoosenData();
  }
});

var choosenProducts = localStorage.getItem("ourProducts");

function displayChoosenData() {
  if (choosenProducts === null) {
    console.log("No chosen products found.");
    return;
  }

  choosenProducts = JSON.parse(choosenProducts);

  var arr = "";
  for (var i = 0; i < choosenProducts.length; i++) {
    var chosenProduct = allPosts.find(function (post) {
      return post.id === choosenProducts[i];
    });

    if (chosenProduct) {
      arr += `<div id="product_${i}">
        <div class="row" id="">
          <h2>${chosenProduct.title}</h2>
          <p>${chosenProduct.description}</p>
          <img src="${chosenProduct.image}" alt="Product Image" style="width:100px">
          <button class="delete-button" onclick='deleteProduct(${i})'>delete</button>
        </div>
      </div>`;
    }
  }
  document.getElementById("showProducts").innerHTML = arr;
}

function deleteProduct(index) {
  choosenProducts.splice(index, 1);
  localStorage.setItem("ourProducts", JSON.stringify(choosenProducts));

  var productElement = document.getElementById("product_" + index);
  if (productElement) {
    productElement.remove();
  }
  location.reload();
}
function toggleDarkMode() {
  var body = document.body;

  // Toggle dark mode class on the body
  body.classList.toggle("dark-mode");
}


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