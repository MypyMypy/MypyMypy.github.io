window.addEventListener('DOMContentLoaded', function() {
  gsap.to(".hero__left", {
    delay: 0.3,
    duration: 0.5,
    ease: "expo",
    opacity: 1,
    transform: "translateX(0)"
  })

  gsap.to(".hero__title",  {
    delay: 0.3,
    duration: 0.5,
    ease: "expo",
    opacity: 1
  })

  gsap.to(".hero__btn",  {
    delay: 0.3,
    duration: 0.5,
    ease: "expo",
    opacity: 1
  })

  gsap.to(".hero__descr",  {
    delay: 0.6,
    duration: 0.5,
    ease: "expo",
    opacity: 1
  })

  gsap.fromTo(".photos-wrap > img",  {
    opacity: 0,
    scale: 0.75
  },
  {
    delay: 0.9,
    duration: 0.5,
    stagger: 0.3,
    ease: "expo",
    opacity: 1,
    scale: 1
  })

  gsap.fromTo(".photos__author", {
    opacity: 0,
  },
  {
    delay: 1.8,
    duration: 0.5,
    ease: "expo",
    opacity: 1
  })

  var open = document.querySelector(".burger");
  var close = document.querySelector(".close");

  var menuToggle = gsap.timeline({paused: true});

  menuToggle.to(".menu", {
    duration: 0.5,
    display: "block",
    opacity: 1,
    transform: "translateY(0)"
  })

  .fromTo(".close", {
    transform: "translateY(80px)"
  }, {
    duration: 0.5,
    transform: "translateY(0)"
  }, "<")

  .fromTo(".menu__top", {
    opacity: 0,
    transform: "translateY(-130px)"
  },
  {
    duration: 0.5,
    opacity: 1,
    transform: "translateY(0)"
  }, "<")


  .fromTo(".nav__list", {
    transform: "translateY(30px)",
    opacity: 0,
  },
  {
    duration: 0.3,
    transform: "translateY(0)",
    opacity: 1
  })

  .fromTo(".menu__right", {
    transform: "translateY(30px)",
    opacity: 0,
  },
  {
    duration: 0.3,
    transform: "translateY(0)",
    opacity: 1
  })

  .fromTo(".social", {
    transform: "translateY(30px)",
    opacity: 0,
  },
  {
    duration: 0.3,
    transform: "translateY(0)",
    opacity: 1
  }, "<");



  open.onclick = function() {
    menuToggle.play();
  }

  close.onclick = function() {
    menuToggle.reverse();
  }
})


