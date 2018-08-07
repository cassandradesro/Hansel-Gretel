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
part2Timeline.duration();
part2Timeline.delay(33);
part3Timeline.delay(65);
part4Timeline.delay(70);
part5Timeline.delay(85);

masterTimeline.add(part1Timeline);
masterTimeline.add(part2Timeline);
masterTimeline.add(part3Timeline);
masterTimeline.add(part4Timeline);
masterTimeline.add(part5Timeline);

// tweenMax.to(target,duration, {vars} stagger ammount):

// animations for part 1


part1Timeline.to(".title h1, .sky .scrolltext, .title h3 ", .5, { opacity: 0 }).to(".part1 .upon", 4, { opacity: 1 }).to(".storyTextIntro", 1.5, { opacity: 1 }).staggerFrom(".part1 .hills img", 1, { y: "200%", ease: Back.easeOut }, .6) //hills stagger in
.to(".part1 .sun", 1, { top: "13%" }).to(".part1 .house", 1, { left: "10%", opacity: 1 }).to(".part1 .upon", 1.5, { opacity: 0 }).to(".storyTextIntro", 1, { opacity: 0 }).to(".storyText1", 2, { opacity: 1 }).to(".storyText1", 3, { opacity: 0 }).staggerTo(".part1 .hills img", 1, { opacity: .6 }, .3).staggerTo(".part1 .hills img", 1, { opacity: 0 }, .3).staggerTo(".part1 .house", 1, { left: "0%", x: "200%", opacity: 0 }).staggerTo(".part1 .sun", 1, { top: "0", left: "-40%", ease: Circ.easeOut }) // hills rotate out
.to(".storyText3", 2, { opacity: 1 }).staggerTo(".part1 .leaf1, .leaf4", 1, { rotation: 360, left: "-10%", top: "90%" }).staggerTo(".part1 .leaf2, .leaf6", 1, { rotation: 360, left: "-10%", top: "90%" }).staggerTo(".part1 .leaf3", 1, { rotation: 360, left: "-10%", top: "90%" }).to(".storyText3", 2, { opacity: 0 }).to(".part1", 1, { opacity: 0 });

// sky rotates out
//pause

// animations for part 2
part2Timeline.staggerTo(".part2", 1, { opacity: 1 }).to(".part2 .storyTextPart2Intro .scene2Text1 ", 3, { opacity: 1 }).to(".part2 .storyTextPart2Intro .scene2Text2 ", 3, { opacity: 1 }).staggerFrom(".part2 .right-side img", 2, { y: "10000%" }, -0.3).to(".part2 .storyTextPart2Intro .scene2Text3 ", 3, { opacity: 1 }).to(".part2 .storyTextPart2Intro .scene2Text4 ", 3, { opacity: 1 }).staggerFrom(".part2 .left-side img", 2, { y: "10000%" }, -0.3).to(".part2 .storyTextPart2Intro .scene2Text5 ", 3, { opacity: 1 }).to(".part2 .storyTextPart2Intro .scene2Text6 ", 3, { opacity: 1 }).to(".part2 .storyTextPart2Intro .scene2Text7 ", 3, { opacity: 1 }).to(".part2 .storyTextPart2Intro .scene2Text1 ", 1, { top: "-100%" }).to(".part2 .storyTextPart2Intro .scene2Text2 ", 1, { top: "-100%" }).to(".part2 .storyTextPart2Intro .scene2Text3 ", 1, { top: "-100%" }).to(".part2 .storyTextPart2Intro .scene2Text4 ", 1, { top: "100%" }).to(".part2 .storyTextPart2Intro .scene2Text5 ", 1, { top: "100%" }).to(".part2 .storyTextPart2Intro .scene2Text6 ", 1, { top: "100%" }).to(".part2 .storyTextPart2Intro .scene2Text7 ", 3, { opacity: 0 }).to(".part2 .storyTextPart2End .scene2EndText1 ", 1, { opacity: 1 }).to(".part2 .storyTextPart2End .scene2EndText2 ", 1, { opacity: 1 }).to(".part2 .storyTextPart2End .scene2EndText3 ", 1, { opacity: 1 }).to(".part2 .storyTextPart2End .scene2EndText4 ", 1, { opacity: 1 }).to(".part2 .storyTextPart2End .scene2EndText5 ", 1, { opacity: 1 }).to(".part2 .storyTextPart2End .scene2EndText6 ", 1, { opacity: 1 }).to(".part2 .storyTextPart2End .scene2EndText7 ", 1, { opacity: 1 }).to(".part2 .storyTextPart2End .scene2EndText8 ", 4, { opacity: 1 }).to(".left-tree1", 1, { rotation: 90, transformOrigin: "100% 100%", scale: 1.25 }).to(".part2 .storyTextPart2End .scene2EndText1", 1, { rotation: 360, x: "300%" }).to(".part2 .storyTextPart2End", .5, { opacity: 0 }).staggerTo(".part2 .right-side img", 1, { y: "1000%" }, -0.3).staggerTo(".part2 .left-side img", 1, { y: "1000%" }, -0.3).to(".part2", 1, { opacity: 0 });

// animations for part 3

part3Timeline.to(".part3 .crumb-1", 1, { top: "10%" }).to(".part3 .crumb-2", 1, { top: "20%" }).staggerTo(".part3", 1, { opacity: 1 }).to(".part3 .crumb-3", 1, { top: "33%" }).to(".part3 .crumb-4", 1.5, { top: "50%" }).to(".part3 .scene3Text1", 2, { left: "5%", opacity: 1 }).to(".part3 .crumb-5", 1.5, { top: "70%" }).to(".part3 .crumb-6", 1, { top: "80%" }).to(".part3 .crumb-7", 1.5, { top: "79%" }).to(".part3 .crumb-8", 1, { top: "90%" }).to(".part3", 1, { opacity: 0 });

// animations for part 4
part4Timeline.to(".part4", 1, { opacity: 1 });

part4Timeline.call(function () {

  $('.part4').mousemove(function (e) {
    console.log("part 4 mouse move!");
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    $('#flashlight').css({
      'left': x - 1380,
      'top': y - 100
    });
    console.log("moving x:", x);
    console.log("moving y:", y);
  });
}).staggerTo(".part4", 40, { delay: 40 }).to(".part4", 1, { opacity: 0, display: 'none' });

// part4Timeline.staggerTo(".part4",1, {opacity: 0});


part5Timeline.to(".part5", 1, { opacity: 1, zIndex: 20 }).to(".part5 p", 10, { opacity: 1 });

// var flashlight = function(){
//   $('.part4').mousemove(function(e) {
//     var x = e.pageX - this.offsetLeft;
//     var y = e.pageY - this.offsetTop;
//     $('#flashlight').css({ 
//       'left': x - 1500,
//       'top': y - 900
//     });
//     console.log("moving x:", x)
//     console.log("moving y:", y)

//   });  
// }


// this is the magic part.
// tweenmax's ticker is a super efficient "ticker" that runs at about 60 times a second on most computers,
// but will intelligently slow down on slower computers so they don't get choppyy 
TweenMax.ticker.addEventListener("tick", function () {
  // measure how far down the page we are, and jump the master timeline to the matching point
  masterTimeline.progress(window.scrollY / document.documentElement.clientHeight / VIEWPORTS_TALL);
});
//# sourceMappingURL=main.js.map
