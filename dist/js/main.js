"use strict";

console.log("Hansel & Gretel Project. Developed by Cassandra Desrosiers and Danny McMillan. Designed by Carol Ehreth.");

var VIEWPORTS_TALL = 3; // how tall is the body? the taller it is, the longer it will take to scroll.
document.body.style.minHeight = VIEWPORTS_TALL * 100 + 100 + "vh";

var masterTimeline = new TimelineMax({ paused: true });

var part1Timeline = new TimelineMax();
var part2Timeline = new TimelineMax();
var part3Timeline = new TimelineMax();
var part4Timeline = new TimelineMax();
var part5Timeline = new TimelineMax();

part1Timeline.duration();
part2Timeline.delay(30);

masterTimeline.add(part1Timeline);
masterTimeline.add(part2Timeline);
masterTimeline.add(part3Timeline);
masterTimeline.add(part4Timeline);
masterTimeline.add(part5Timeline);

// tweenMax.to(target,duration, {vars} stagger ammount):

// animations for part 1


part1Timeline.to(".title h1, .sky .scrolltext, .title h3 ", .5, { opacity: 0 }).to(".part1 .upon", 4, { opacity: 1 }).to(".storyTextIntro", 1.5, { opacity: 1 }).staggerFrom(".part1 .hills img", 1, { y: "200%", ease: Back.easeOut }, .6) //hills stagger in
.to(".part1 .sun", 1, { top: "15%" }).to(".part1 .house", 1, { left: "0%", opacity: 1 }).to(".part1 .upon", 1.5, { opacity: 0 }).to(".storyTextIntro", 1, { opacity: 0 }).to(".storyText1", 2, { opacity: 1 }).to(".storyText1", 3, { opacity: 0 }).to(".storyText2", 2, { opacity: 1 }).to(".storyText2", 2, { opacity: 0 }).staggerTo(".part1 .house", 2, { left: "0%", x: "200%", opacity: 0 }).staggerTo(".part1 .sun", 2, { top: "0", left: "-40%", ease: Circ.easeOut }).staggerTo(".part1 .hills img", 3, { y: "-190%" }, 1) // hills rotate out
.staggerTo(".part1 .sky img", 3, { y: "100%" }, 1);
// sky rotates out
//pause

// animations for part 2
part2Timeline.staggerTo(".part2", 1, { opacity: 1 }).to(".part2", 1, { opacity: 1 })
// .to(".part2", 1, {opacity: 0})// come on scene
.staggerFrom(".part2 .right-side img", 1, { y: "10000%" }, -0.3).staggerFrom(".part2 .left-side img", 1, { y: "10000%" }, -0.3).to({}, 2, {}) //pause
.staggerTo(".part2 .right-side img", 1, { y: "1000%" }, -0.3).staggerTo(".part2 .left-side img", 1, { y: "1000%" }, -0.3);

// animations for part 3

// animations for part 4


// this is the magic part.
// tweenmax's ticker is a super efficient "ticker" that runs at about 60 times a second on most computers,
// but will intelligently slow down on slower computers so they don't get choppyy 
TweenMax.ticker.addEventListener("tick", function () {
	// measure how far down the page we are, and jump the master timeline to the matching point
	masterTimeline.progress(window.scrollY / document.documentElement.clientHeight / VIEWPORTS_TALL);
});
//# sourceMappingURL=main.js.map
