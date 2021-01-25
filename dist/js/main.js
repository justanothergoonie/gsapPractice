"use strict";

console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
gsap.registerPlugin(ScrollTrigger); //toggle actions and basics
// gsap.to('.c', {
// 	scrollTrigger: {
// 		trigger: '.c',
// 		start: 'center center',
// 		end: '+=100',
// 		// end: () => '=+' + document.querySelector('.c').offsetWidth,
// 		markers: true,
// 		toggleActions: 'restart pause reverse pause',
// 	},
// 	x: 400,
// 	rotation: 360,
// 	duration: 3,
// });
//start and end
// gsap.to('.b', {
// 	scrollTrigger: {
// 		trigger: '.a',
// 		start: 'top 50px',
// 		endTrigger: '.c',
// 		end: 'bottom 10%',
// 		// end: () => '=+' + document.querySelector('.c').offsetWidth,
// 		markers: true,
// 		toggleActions: 'restart pause reverse pause',
// 	},
// 	x: 400,
// 	rotation: 360,
// 	duration: 3,
// });
// scrub lag examples

gsap.to('.c', {
  scrollTrigger: {
    trigger: '.c',
    start: 'top center',
    end: 'top 100px',
    scrub: true,
    // end: () => '=+' + document.querySelector('.c').offsetWidth,
    markers: true,
    toggleActions: 'restart pause reverse pause'
  },
  x: 400,
  rotation: 360,
  ease: 'none',
  duration: 3
});
gsap.to('.ghost1', {
  scrollTrigger: {
    trigger: '.c',
    start: 'top center',
    end: 'top 100px',
    scrub: 2,
    // end: () => '=+' + document.querySelector('.c').offsetWidth,
    markers: true,
    toggleActions: 'restart pause reverse pause'
  },
  x: 400,
  rotation: 360,
  ease: 'none',
  duration: 3
});
gsap.to('.ghost2', {
  scrollTrigger: {
    trigger: '.c',
    start: 'top center',
    end: 'top 100px',
    scrub: 4,
    // end: () => '=+' + document.querySelector('.c').offsetWidth,
    markers: true,
    toggleActions: 'restart pause reverse pause'
  },
  x: 400,
  rotation: 360,
  ease: 'none',
  duration: 3
});
gsap.to('.ghost3', {
  scrollTrigger: {
    trigger: '.c',
    start: 'top center',
    end: 'top 100px',
    scrub: 8,
    // end: () => '=+' + document.querySelector('.c').offsetWidth,
    markers: true,
    toggleActions: 'restart pause reverse pause'
  },
  x: 400,
  rotation: 360,
  ease: 'none',
  duration: 3
}); // using with timelines
// let tl = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: '.c',
// 		start: 'top center',
// 		end: 'top 100px',
// 		scrub: true,
// 		// end: () => '=+' + document.querySelector('.c').offsetWidth,
// 		markers: true,
// 		toggleActions: 'restart pause reverse pause',
// 	},
// });
// tl.to('.c', {
// 	x: 400,
// 	rotation: 360,
// 	ease: 'none',
// 	duration: 3,
// })
// 	.to('.c', {
// 		backgroundColor: 'purple',
// 		duration: 1,
// 	})
// 	.to('.c', {
// 		x: 0,
// 		duration: 3,
// 	});
//PINNING
//# sourceMappingURL=main.js.map
