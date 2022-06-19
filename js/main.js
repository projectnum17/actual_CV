/*Animate*/
AOS.init();


const hamb = document.querySelector('.hamb');
const popup = document.querySelector ('.popup');
const menu = document.querySelector('.menu').cloneNode(1);
const body = document.body;

hamb.addEventListener('click', hambHandler);


/*PopUp menu*/

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll")
    renderPopUp();
};

function renderPopUp() {
    popup.appendChild(menu);
};

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
};

/*Header background*/

(function () {
  const header = document.querySelector('.navbar_new');
  window.onscroll = () => {
    if(window.pageYOffset > 50) {
      header.classList.add('navbar_new_active');
    } else {
      header.classList.remove('navbar_new_active');
    }
  };
}());


/*Smooth scroll*/

(function () {

  const smoothScroll = function (targetEl, duration) {
      const headerElHeight =  document.querySelector('.navbar_new').clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;
  
      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };

  const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();
}()); 

/*Ligth and dark theme*/

const themeSwitchers = document.querySelectorAll('.change-theme');

themeSwitchers.forEach(switcher => {
  switcher.addEventListener('click', function (){
    applyTheme(this.dataset.theme);
    localStorage.setItem('theme', this.dataset.theme);
  });
});

function applyTheme(themeName) {
  let themeUrl = `css/theme-${themeName}.css`;
  document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
}

let activeTheme = localStorage.getItem('theme');

if(activeTheme === null) {
  applyTheme('light');
} else {
  applyTheme(activeTheme);
}
