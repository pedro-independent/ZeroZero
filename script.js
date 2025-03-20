// gsap.registerPlugin(ScrollTrigger);

// let colorWhite = "var(--white-smoke)";
// let colorBlack = "var(--black)";
// let colorTransparent = "var(transparent)";

// /* Navbar Color Change */  
// function initNavbarAnimations() {
//     gsap.set(".navbar_component", {
//       backgroundColor: colorTransparent,
//     });
  
//     gsap.set(".navbar-wrapper", {
//         color: colorWhite,
//       });
  
//     let tlNav = gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: ".is-sobre-nos",
//           start: "center top",
//           end: "80% top",
//           scrub: true,
//           markers: true,
//         },
//       })
//       .to(".navbar_component", {
//         backgroundColor: colorWhite,
//       })
//       .to(".navbar-wrapper",
//         {
//           color: colorBlack,
//         },
//       )    
//   }