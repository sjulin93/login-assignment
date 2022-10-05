

const showLogin = document.querySelector("#show-login");
const showLogout = document.querySelector(".logout");
const popup = document.querySelector(".form-container");
const closeBtn = document.querySelector(".form .close-btn");
const loginBtn = document.querySelector(".login-btn");
const meny = document.querySelector(".logga-knappen");
const isLoggedIn = localStorage.getItem("isLoggedIn");
const logoutBtn= document.getElementById("logoutBtn");




showLogin.addEventListener("click", function () {
  popup.classList.toggle("activate");

});

closeBtn.addEventListener("click", function () {
  popup.classList.remove("activate");
});

loginBtn.addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username == "Sara" && password == "qwe123") {
    localStorage.setItem("isLoggedIn", "true");
    popup.classList.remove("activate");
    showLogin.classList.add("logged");
    showLogout.classList.add("logged");
  } else {
    const WrongPw = document.querySelector(".wrongPw");
    WrongPw.classList.add("error");
  }
});




if(isLoggedIn){
    showLogin.classList.add("logged");
    showLogout.classList.add("logged");
}else{
    showLogin.classList.remove("logged");
    showLogout.classList.remove("logged");
}



logoutBtn.addEventListener("click", function(){
    showLogin.classList.remove("logged");
    showLogout.classList.remove("logged");
    localStorage.clear();
})
