var myHttp = new XMLHttpRequest();
var allPosts;

if (localStorage.getItem("ourProducts") != null) {
  allPosts = JSON.parse(localStorage.getItem("ourProducts"));
} else {
  allPosts = [];
}

var getDataBtn = document.getElementById("btn");
var getMenData = document.getElementById("menData");
var getWomenData = document.getElementById("womennData");

getMenData.addEventListener("click", getMData);
getWomenData.addEventListener("click", getWData);

function getMData() {
  myHttp.open("GET", "https://fakestoreapi.com/products");
  myHttp.send();

  myHttp.addEventListener("readystatechange", function () {
    if (myHttp.readyState == 4 && myHttp.status == 200) {
      allPosts = JSON.parse(myHttp.responseText); // Use responseText instead of response
      displayMenPosts();
    }
  });
}
// allPosts = [];
function displayMenPosts() {
  var arr = ``;
  for (var i = 0; i < allPosts.length; i++) {
    if (
      allPosts[i].category === "men's clothing" ||
      allPosts[i].category === "electronics"
    ) {
      arr += `<div>
        <div class="row" >
         <h2>${allPosts[i].title}</h2>
          <p>${allPosts[i].description}</p>
          <img src="${allPosts[i].image}" alt="Product Image" style="width:100px">
        </div>
         <button id="addtoCart style="display: block" onclick='(AddToLocalStorage(${allPosts[i].id}))' >Add to cart</button>
      </div>`;
    }
  }
  document.getElementById("post").innerHTML = arr;
  // localStorage.setItem("ourProducts", JSON.stringify(allPosts)); // Save allPosts to localStorage
}
////////////////////////////////////////////////////////////////////////
function getWData() {
  myHttp.open("GET", "https://fakestoreapi.com/products");
  myHttp.send();

  myHttp.addEventListener("readystatechange", function () {
    if (myHttp.readyState == 4 && myHttp.status == 200) {
      allPosts = JSON.parse(myHttp.responseText); // Use responseText instead of response
      displayWomenPosts();
    }
  });
}

function displayWomenPosts() {
  var arr = ``;
  for (var i = 0; i < allPosts.length; i++) {
    if (
      allPosts[i].category === "women's clothing" ||
      allPosts[i].category === "jewelery"
    ) {
      arr += `<div>
        <div class="row" id="">
         <h2>${allPosts[i].title}</h2>
          <p>${allPosts[i].description}</p>
          <img src="${allPosts[i].image}" alt="Product Image" style="width:100px">
          
        </div>
          <button id="addtoCart style="display: block" onclick='(AddToLocalStorage(${allPosts[i].id}))' >Add to cart</button>
      </div>`;
    }
  }
  document.getElementById("post").innerHTML = arr;
  // localStorage.setItem("ourProducts", JSON.stringify(allPosts)); // Save allPosts to localStorage
}

////////////////////////////////////////////////////////////////////////////////////////
getDataBtn.addEventListener("click", getData);

function getData() {
  myHttp.open("GET", "https://fakestoreapi.com/products");
  myHttp.send();

  myHttp.addEventListener("readystatechange", function () {
    if (myHttp.readyState == 4 && myHttp.status == 200) {
      allPosts = JSON.parse(myHttp.responseText); // Use responseText instead of response
      displayPosts();
    }
  });
}

function displayPosts() {
  var arr = ``;
  for (var i = 0; i < allPosts.length; i++) {
    arr += `<div>
        <div class="row" id="">
         <h2>${allPosts[i].title}</h2>
          <p>${allPosts[i].description}</p>
          <img src="${allPosts[i].image}" alt="Product Image" style="width:100px">
        </div>
        <button id="addtoCart style="display: block" onclick='(AddToLocalStorage(${allPosts[i].id}))' >Add to cart</button>
        
      </div>`;
  }
  document.getElementById("post").innerHTML = arr;
  // localStorage.setItem("ourProducts", JSON.stringify(allPosts)); // Save allPosts to localStorage
}

///////////////////////////////////////////////////////////////////////////

// var addToCart = document.getElementById("addtoCart");

// addToCart.addEventListener("click", function (eve) {
//   compareToLocalStorage(eve);
// });

function AddToLocalStorage(id) {
  var array = [];

  // Retrieve existing data from localStorage
  var storedData = localStorage.getItem("ourProducts");

  if (storedData != null) {
    array = JSON.parse(storedData);
  }

  // Check if the product is already in the cart
  if (array.includes(id)) {
    // If the product is already in the cart, show an alert
    alert("This product is already in your cart.");
    return;
  }

  // Push the new id to the array
  array.push(id);
  console.log(array);

  // Store the updated array in localStorage
  localStorage.setItem("ourProducts", JSON.stringify(array));
}

function toggleDarkMode() {
  var body = document.body;

  // Toggle dark mode class on the body
  body.classList.toggle("dark-mode");
}
