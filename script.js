var cursor = document.querySelector(".cursor");
var main = document.querySelector("main");
var load = document.querySelector(".bg-load");
var card = document.querySelectorAll(".card-one");
var sideCard = document.querySelector("#explore");

// ---------------------------------------------------------- #Cursor start ------------------------------------------------
main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1.5,
    ease: "power4.out",
  });
});

// ---------------------------------------------------------- #Cursor end ------------------------------------------------

// ---------------------------------------------------------- #Loader start ------------------------------------------------
gsap.to(load, {
  top: "-100%",
  delay: 2,
  duration: 2,
  ease: "power4.out",
});

// ---------------------------------------------------------- #Loader end ------------------------------------------------

// ---------------------------------------------------------- #text animation start ------------------------------------------------

function breakText() {
  var h1 = document.querySelector(".bg-load h1");
  var h1text = h1.textContent;
  console.log(h1text);

  var splitText = h1text.split("");
  console.log(splitText);

  var clutter = "";
  var halfvalue = Math.floor(splitText.length / 2);
  console.log(halfvalue);
  splitText.forEach(function (e, index) {
    if (index < halfvalue) {
      clutter = clutter + `<span class="a">${e}</span>`;
    } else {
      clutter = clutter + `<span class="b">${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
  console.log(clutter);
}

breakText();

gsap.from(".bg-load h1 .a", {
  y: 80,
  duration: 0.8,
  delay: 0.5,
  opacity: 0,
  stagger: 0.15,
});
gsap.from(".bg-load h1 .b", {
  y: 80,
  duration: 0.8,
  delay: 0.5,
  opacity: 0,
  stagger: -0.15,
});

// ---------------------------------------------------------- #text animation end ------------------------------------------------

// ---------------------------------------------------------- #Horizonatal Card slide start ------------------------------------------------

gsap.to("#explore .side-card", {
  scrollTrigger: {
    trigger: "#explore",
    scroller: "body",
    start: "top 0",
    end: "bottom bottom",
    pin: true,
    pinSpacing: false,
    scrub: 1,
  },
});

gsap.to(".scrolling-content", {
  y: "-80%",
  scrollTrigger: {
    trigger: "#explore",
    scroller: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  },
});

// ---------------------------------------------------------- #Horizonatal Card slide end ------------------------------------------------

// ------------------------------------------------------    #Slider Start ----------------------------------------------------

gsap.set("#games-slider .swiper-wrapper", {
  x: () => window.innerWidth * 0.5,
});
gsap.to("#games-slider .swiper-wrapper", {
  x: () =>
    `-${
      document.querySelector("#games-slider .swiper-wrapper").scrollWidth -
      window.innerWidth
    }px`,
  scrollTrigger: {
    trigger: "#games-slider",
    scroller: "body",
    start: "top top",
    end: () =>
      `+=${
        document.querySelector("#games-slider .swiper-wrapper").scrollWidth
      }`,
    pin: true,
    pinSpacing: false,
    scrub: 1,
  },
});

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  loop: true,
});

// ------------------------------------------------------    #Slider End ----------------------------------------------------

// ------------------------------------------------------    #marquee Start ----------------------------------------------------

function marqueAnimation() {
  window.addEventListener("wheel", function (e) {
    // console.log(e.deltaY);
    if (e.deltaY > 0) {
      // console.log("seedha scroll");
      gsap.to(".marque", {
        transform: "translateX(-200%)",
        ease: "none",
        duration: 3.5,
        repeat: -1,
      });
      gsap.to(".marque img", {
        rotate: 180,
      });
    } else {
      // console.log("reverse scroll");
      gsap.to(".marque", {
        transform: "translateX(0)",
        ease: "none",
        duration: 3.5,
        repeat: -1,
      });
      gsap.to(".marque img", {
        rotate: 0,
      });
    }
  });
}

marqueAnimation();

// ------------------------------------------------------    #marquee End ----------------------------------------------------

  const elemC = document.querySelector("#elem-container");
  const elems = document.querySelectorAll(".elem");

  elems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      const att = elem.getAttribute("data-image");
      gsap.to(cursor, {
        width: "400px",
        height: "300px",
        borderRadius: "20px",
        backgroundImage: `url(${att})`,
        backgroundSize: "cover", 
        backgroundPosition: "center",
        duration: 0.3,
        ease: "power1.out",
      });
    });
  
    elem.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
        width: "64px",
        height: "64px",
        borderRadius:"50%",
        backgroundColor:"#EDBFFF",
        backgroundImage: "none",
        duration: 0.3,
        ease: "power1.out",
      });
    });
  });
  
