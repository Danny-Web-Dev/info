const coords = {x: 0, y: 0};
const circles = document.querySelectorAll('.circle');

const execute = (param) => {
	circles.forEach((circle) => {
		circle.classList[param]('hide-cursor');
	})
}

circles.forEach((circle) => {
	circle.x = 0;
	circle.y = 0;
});

const animateCircles = () => {
	let x = coords.x;
	let y = coords.y;
	circles.forEach((circle, index) => {
		circle.style.left = x - 14 + 'px';
		circle.style.top = y - 14 + 'px';
		circle.style.scale = JSON.stringify((circles.length - index) / circles.length);
		circle.x = x;
		circle.y = y;
		const nextCircle = circles[index + 1] || circles[0];
		x += (nextCircle.x - x) * 0.3;
		y += (nextCircle.y - y) * 0.3;
	});
	requestAnimationFrame(animateCircles)
}

(()=>{
	return window.matchMedia("(max-width: 600px)").matches ? execute('add') : execute('remove');
})();


window.addEventListener('mousemove', (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
})
window.addEventListener('mouseout', () => execute('add'));
window.addEventListener('mouseover', () => execute('remove'));
animateCircles()
