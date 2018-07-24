console.log(`Hansel & Gretel Project. Developed by Cassandra Desrosiers and Danny McMillan. Designed by Carol Ehreth.`)


var scene = document.querySelector('#scene');
var parallaxInstance = new Parallax(scene);

function(){
	
	const ratio = 16/9;
	const size = 95;
	const $bookContainer = document.querySelector('.book-container')

	let resizeContainer = function() {
		let windowWidth = document.documentElement.clientWidth;
		let windowHeight = document.documentElement.clientHeight;
		let windowRatio = windowWidth / windowHeight;
		if (windowRatio > ratio) {
			console.log("window is wider than 16/9")
			$bookContainer.style.height = size + "vh";
			$bookContainer.style.width = size * ratio + "vh";

		} else {
			console.log("window is taller than 16/9")
			$bookContainer.style.width = size + "vw";
			$bookContainer.style.height = size * 1/ratio + "vw";
		}
	}

	window.addEventListener('load', resizeContainer)
	window.addEventListener('resize', resizeContainer)
	window.addEventListener('orientationchange', resizeContainer)
	document.body.style.height = "1000vh";

};
