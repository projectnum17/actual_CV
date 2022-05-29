const hamb = document.querySelector('.hamb');
const popup = document.querySelector ('.popup');
const menu = document.querySelector('.menu').cloneNode(1)
const body = document.body

hamb.addEventListener('click', hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll")
    renderPopUp();
} 

function renderPopUp() {
    popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

(function () {
  const header = document.querySelector('.navbar_new');
  window.onscroll = () => {
    if(window.pageYOffset > 100) {
      header.classList.add('navbar_new_active');
    } else {
      header.classList.remove('navbar_new_active');
    }
  }
}())
