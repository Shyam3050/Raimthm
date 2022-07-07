const menu = document.querySelector(".nav-toggle");
const nav_links = document.querySelector(".nav-links");
const nav_buttom = document.querySelector(".nav-buttom");
menu.addEventListener("click", () => {
    nav_links.classList.toggle("active");
    nav_buttom.classList.toggle("active");
})
console.log(nav_buttom);