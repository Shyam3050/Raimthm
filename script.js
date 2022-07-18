// this is for adding active class to links
function activeLinks(){
    nav_links.classList.toggle("active");
    nav_buttom.classList.toggle("active");
}
// bar closer
function barCloser() {
    if (toogleClick == 0) {
      menuIcon.classList = "fa fa-times icon";
      menuText.textContent= "Close";
      return (toogleClick = 1);
    }
    if (toogleClick == 1) {
      menuIcon.classList = "fa fa-bars icon";
      menuText.textContent = "Menu";
      return (toogleClick = 0);
    }
  }
const menu = document.querySelector(".nav-toggle");
const menuIcon = document.querySelector(".menu-icon");
const menuText = document.querySelector(".menu-text");
const nav_links = document.querySelector(".nav-links");
const nav_buttom = document.querySelector(".nav-buttom");
const allLinks = [...document.querySelectorAll(".nav-link"), ...document.querySelectorAll(".nav-buttom-link")];
let toogleClick = 0;
menu.addEventListener("click", () => {
    activeLinks();
    barCloser();
})
allLinks.forEach((link) => {
    link.addEventListener("click",()=>{
        activeLinks();
        barCloser();
    })
})
// navigation background adder
const navbar = document.querySelector(".navbar");
const navButtomLink = document.querySelector(".nav-buttom-links")
window.addEventListener("scroll", () => {
 if(scrollY > 100){
  console.log(scrollY);
  navbar.classList.add("active");
  navButtomLink.classList.add("active");
 }else{
  navbar.classList.remove("active");
  navButtomLink.classList.remove("active");
 }
});