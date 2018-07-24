"use strict";

console.log("Hansel & Gretel Project. Developed \nby Cassandra Desrosiers and Danny McMillan. Designed by Carol Ehreth.");

var ratio = 16 / 9;
var size = 95;
var $bookContainer = document.querySelector('.book-container');

var resizeContainer = function resizeContainer() {
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var windowRatio = windowWidth / windowHeight;
	if (windowRatio > ratio) {
		console.log("window is wider than 16/9");
		$bookContainer.style.height = size + "vh";
		$bookContainer.style.width = size * ratio + "vh";
	} else {
		console.log("window is taller than 16/9");
		$bookContainer.style.width = size + "vw";
		$bookContainer.style.height = size * 1 / ratio + "vw";
	}
};

window.addEventListener('load', resizeContainer);
window.addEventListener('resize', resizeContainer);
window.addEventListener('orientationchange', resizeContainer);
document.body.style.height = "1000vh";
//# sourceMappingURL=main.js.map
