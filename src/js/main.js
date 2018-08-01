console.log(`Hansel & Gretel Project. Developed by Cassandra Desrosiers and Danny McMillan. Designed by Carol Ehreth.`)


// var scene = document.querySelector('#scene');
// var parallaxInstance = new Parallax(scene);


var controller = new ScrollMagic.Controller();


var part1Timeline = new TimelineMax();
var titleMove = new TimelineMax();

titleMove.from(".title", 1, {top: "25%"});
titleMove.to(".title", 2, {top: "-100%"})
part1Timeline.from(".house", 1, {left: "-150%"});
// part1Timeline.from(".part1 h1", 1, {});
part1Timeline.to(".house", 1, {left: "10%"});

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "body", duration: "1000%"})
	.setTween(part1Timeline)
	.addIndicators({name: "loop"}) // add indicators (requires plugin)
	.addTo(controller);


var titleScene = new ScrollMagic.Scene({triggerElement: 'body', duration: "1000%"})
		.setTween(titleMove)
		.addIndicators({name: 'title'})
		.addTo(controller);

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('cloud12', 'particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });