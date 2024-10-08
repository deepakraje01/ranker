const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


var cursorElement = document.querySelector("#cursor");
var main = document.querySelector("#main");


document.addEventListener("mousemove", function (dets) {
  cursorElement.style.left = dets.x + 5 + "px";
  cursorElement.style.top = dets.y + 5 + "px";
})

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
    });
  });
  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * .5)
    });
  });
});

// Get the menu and close button elements
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const navbar = document.getElementById('navbar');

// Open navbar when menu button is clicked
menuBtn.addEventListener('click', () => {
    navbar.classList.add('active');
});

// Close navbar when close button is clicked
closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
});



function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: '-10',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut
  })
    .to(".boundingelem", {
      y: 0,
      duration: 2,
      delay: -1,
      ease: Expo.easeInOut,
      stagger: .2
    })
    .from("#herofooter", {
      y: '-10',
      opacity: 0,
      delay: -1,
      duration: 1.5,
      ease: Expo.easeInOut
    })
    
  .to(".wrapper img", {
    y: 0,
    duration: 2,
    delay: -2,
    ease: Expo.easeInOut,
    // stagger: .2
  })
}

firstPageAnim();

