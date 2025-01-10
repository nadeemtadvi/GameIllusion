var cursor = document.querySelector(".cursor");
var main = document.querySelector("main");
var load = document.querySelector(".bg-load");
var tl = gsap.timeline();
var card =  document.querySelectorAll(".card-one")
var sideCard = document.querySelector("#explore")

// const scroll = new LocomotiveScroll({
//     el: document.querySelector("main"),
//     smooth: true,
//     lerp: 0.04,
//   });

  gsap.to("#explore .side-card", {
    scrollTrigger: {
      trigger: "#explore",
      scroller: "body", 
      start: "top 0",
      end: "bottom bottom", // Changed to keep pinned until bottom of container
      pin: true,
      pinSpacing: false,
      scrub: 1,
      
    },
  });
  
  gsap.to(".scrolling-content", {
    y: "-80%",
    scrollTrigger: {
      trigger: "#explore", // Changed to use same container as pin
      scroller: "body",
      start: "top top",
      end: "bottom bottom", // Match end with pin
      scrub: 1,
      
    },
  });
  

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1.5,
    ease: "power4.out",
  });
});

tl.to(load, {
  top: "-100%",
  delay: 0.5,
  duration: 1,
  ease: "power4.out",
});

gsap.to("#games-slider .swiper-wrapper", {
    x: () => `-${document.querySelector("#games-slider .swiper-wrapper").scrollWidth - window.innerWidth}px`,
    scrollTrigger: {
        trigger: "#games-slider",
        scroller: "body",
        start: "top top",
        end: () => `+=${document.querySelector("#games-slider .swiper-wrapper").scrollWidth}`, // Keep dynamic calculation for horizontal scroll
        pin: true,
        pinSpacing: false, 
        scrub: 1,
        
    },
});



const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3.5,
  spaceBetween: 30,
  loop: true,
});