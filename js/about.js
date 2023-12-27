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