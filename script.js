// gsap.registerPlugin(ScrollTrigger);

// const createScroll01 = () => {
//   const panels = Array.from(document.querySelectorAll('.section-panel'));

//   panels.forEach((panel, index) => {
//     const isLast = index === panels.length - 1;

//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: panel,
//           start: 'top top',
//           scrub: 1,
//         },
//       })
//       // Animate panel
//       .to(
//         panel,
//         {
//           ease: 'none',
//           startAt: { filter: 'brightness(100%) contrast(100%)' },
//           filter: isLast ? 'none' : 'brightness(50%) contrast(135%)',
//         },
//         '<'
//       )
//   });
// };

// document.addEventListener('DOMContentLoaded', () => {
//   createScroll01();
// });
