console.log(`Hansel & Gretel Project. Developed by Cassandra Desrosiers and Danny McMillan. Designed by Carol Ehreth.`)


var scene = document.querySelector('#scene');
// var parallaxInstance = new Parallax(scene);

//SCROLLMAGIC WHEN YOU'RE READY
// var controller = new ScrollMagic.Controller();


// var part1Timeline = new TimelineMax();

// part1Timeline.from(".part1 h1", 1, {left: "-500%"});
// // part1Timeline.from(".part1 h1", 1, {});
// // part1Timeline.to(".part1 h1", 1, {left: "500%"});

<<<<<<< HEAD
// // build scene
// var scene = new ScrollMagic.Scene({triggerElement: "body", duration: "1000%"})
// 	.setTween(part1Timeline)
// 	.addIndicators({name: "loop"}) // add indicators (requires plugin)
// 	.addTo(controller);
=======

part1Timeline.from(".house", 1, {left: "-150%"});
// part1Timeline.from(".part1 h1", 1, {});
part1Timeline.to(".house", 1, {left: "10%"});

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "body", duration: "1000%"})
	.setTween(part1Timeline)
	.addIndicators({name: "loop"}) // add indicators (requires plugin)
	.addTo(controller);

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('cloud12', 'particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });
>>>>>>> 8d433bfcadc2ee392d22d576c5ed05f824ec5873
