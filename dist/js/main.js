'use strict';

console.log('Hansel & Gretel Project. Developed by Cassandra Desrosiers and Danny McMillan. Designed by Carol Ehreth.');

var scene = document.querySelector('#scene');
// var parallaxInstance = new Parallax(scene);

//SCROLLMAGIC WHEN YOU'RE READY
var controller = new ScrollMagic.Controller();

var part1Timeline = new TimelineMax();

var test = new TimelineMax();

var testscene = ScrollMagic.Scene({ triggerElement: 'body', duration: "1000%" }).setTween(test).addIndicators({ name: "test" }).addTo(controller);

test.from(".sun", 1, { top: "10%" });
test.to(".sun", 1, { top: "-1000%" });

// part1Timeline.from(".part1 h1", 1, {left: "-500%"});
// // part1Timeline.from(".part1 h1", 1, {});
// part1Timeline.to(".part1 h1", 1, {left: "500%"});

// // build scene
var scene = new ScrollMagic.Scene({ triggerElement: "body", duration: "1000%" }).setTween(part1Timeline).addIndicators({ name: "loop" }) // add indicators (requires plugin)
.addTo(controller);

part1Timeline.from(".house", 1, { left: "-150%" });
// part1Timeline.from(".part1 h1", 1, {});
part1Timeline.to(".house", 1, { left: "10%" });
//# sourceMappingURL=main.js.map
