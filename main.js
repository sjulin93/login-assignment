//här skapar jag mina variablar för att kunna använda i funktionen för popup

const showLogin = document.querySelector("#show-login");
const showLogout = document.querySelector(".logout");
const popup = document.querySelector(".form-container");
const closeBtn = document.querySelector(".form .close-btn");
const loginBtn = document.querySelector(".login-btn");
const meny = document.querySelector(".logga-knappen");
const isLoggedIn = localStorage.getItem("isLoggedIn");
const logoutBtn= document.getElementById("logoutBtn");


//funktion för visa popup loginruta

showLogin.addEventListener("click", function () {
  popup.classList.toggle("activate");

});
//funktion för att kunna stänga med X knappen i loginrutan
closeBtn.addEventListener("click", function () {
  popup.classList.remove("activate");
});

//----------------------------------------------//


//valideringsfunktion

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

//funktion för att kolla om inloggningsuppgifter finns sparade och håller dig inloggad


if(isLoggedIn){
    showLogin.classList.add("logged");
    showLogout.classList.add("logged");
}else{
    showLogin.classList.remove("logged");
    showLogout.classList.remove("logged");
}

//logga ut function

logoutBtn.addEventListener("click", function(){
    showLogin.classList.remove("logged");
    showLogout.classList.remove("logged");
    localStorage.clear();
})
