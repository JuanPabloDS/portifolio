class MobileNavbar {
    constructor(mobileMenu, mobileMenuex, navList, navLinks) {
      this.body = document.querySelector("body");
      this.mobileMenu = document.querySelector(mobileMenu);
      this.mobileMenuEx = document.querySelector(mobileMenuex);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
      this.hiddenClass = "hidden";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.body.classList.toggle(this.hiddenClass);
      this.mobileMenuEx.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
      this.mobileMenuEx.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".mobile-menu-ex",
    ".nav-list",
    ".nav-list li",
  );


  mobileNavbar.init();


function closeMenu(){
    const menu = document.querySelector(".mobile-menu");
    const menuEx = document.querySelector(".mobile-menu-ex");
    const navList = document.querySelector(".nav-list");
    const body = document.querySelector("body")

    menu.classList.remove("active")
    menuEx.classList.remove("active")
    navList.classList.remove("active")
    body.classList.remove("hidden")
    mobileNavbar.animateLinks()
  }

// TypeWriter

'use strict';

// SVG

const clima = document.getElementById("change")
const fill = clima.getAttribute("fill")


var colors = ["#a09fa5", "#a09fa5"];//Array com as cores, pode adicionar contas quiser
var i = 0;

const change = document.querySelector('.change');
let counter = 0;

const colorArr = ["#a09fa5", "#f1ca6e"]

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function main() {

  await sleep(2000);
  change.style.fill = colorArr[0]
  setInterval(
    ()=> {
      counter++
      
      if (counter == colorArr.length) {
        counter = 0
      }
      change.style.fill = colorArr[counter];
    }, 6000
  )

}

main();



// Button selecionado

function changeButton(b1, b2, b3) {


  const buttonSelect1 = document.getElementById(b1);
  const buttonSelect2 = document.getElementById(b2);
  const buttonSelect3 = document.getElementById("button-select3");

  b1.style.background = '';
  b2.style.background = '';
  b3.style.background = '';


  var idDoBotao = event.target.id;
  buttonSelect = document.getElementById(idDoBotao);
  buttonSelect.style.background = 'transparent';
  console.log("ID do botão: " + idDoBotao);

}

const buttonSelect1 = document.getElementById("button-select1");
const buttonSelect2 = document.getElementById("button-select2");
const buttonSelect3 = document.getElementById("button-select3");

document.getElementById("button-select1").addEventListener("click", function() {
  var urlParams = new URLSearchParams(window.location.search)
  if (urlParams == 'Backend')
    console.log("Valor do parametro1:", parametro1);

  console.log("Valor do parametro1:", parametro1);
});

document.getElementById("button-select2").addEventListener("click", function() {
  var urlParams = new URLSearchParams(window.location.search)
  var parametro1 = urlParams.get('search');

  if (urlParams == 'Backend')
    console.log("Valor do parametro2:", parametro1);

});

document.getElementById("button-select3").addEventListener("click", function() {
  var urlParams = new URLSearchParams(window.location.search)
  var parametro1 = urlParams.get('search');

  console.log("Valor do parametro1:", parametro1);
});



