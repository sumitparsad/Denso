const menu = document.querySelector(".desktop-ham-menu");
const hamburger = document.querySelector(".hamburger");
function toggle() {
  console.log("s");
  menu.classList.toggle("ham-menu");
  body.classList.toggle("ham-body");
}
hamburger.addEventListener("click", toggle);

const body = document.querySelector("body");
