var darkButton = document.getElementById("darkButton");

function darkMode() {
    var htmlBody = document.body;
    htmlBody.classList.toggle("dark-mode");
};

darkButton.addEventListener("click",darkMode);

var menuButton = document.getElementById("menuButton");

function menuOn() {
    var htmlBody = document.body;
    htmlBody.classList.toggle("visibility");
};

menuButton.addEventListener("click",menuOn);

var buttonUp = document.getElementById("buttonUp");

function toTop() {
    document.documentElement.scrollTo({top:0, bahavior: "smooth"});
};

buttonUp.addEventListener("click",toTop);

var signUpButton = document.getElementById("signUpButton");
var signUpModal = document.getElementById("signUpModal");
var closeModalButton = document.getElementById("closeModalButton");

function openSignUpModal() {
    signUpModal.style.display = "flex";
};

function closeSignUpModal () {
    signUpModal.style.display = "none" ;
}

signUpButton.addEventListener("click",openSignUpModal);
closeModalButton.addEventListener("click",closeSignUpModal);