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


// TypeWriter

'use strict';

function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 200 * i)
    );

    setInterval(() => typeWriter(el), 25000);
}

typeWriter(elementEl);

