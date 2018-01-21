var canvas = document.getElementById('gravity');
var ctx = canvas.getContext('2d');
var gravity = 10;

var ball = {
		x: 300,
		y: 200,
		radius: 25,
		color: 'blue',
		draw: function() {
			ctx.beginPath();
		    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
		    ctx.closePath();
		    ctx.fillStyle = this.color;
		    ctx.fill();
		}
};


function init() {
	window.requestAnimationFrame(drawMain);
}

function drawMain() {
	ctx.clearRect(0,0, canvas.width, canvas.height);
	ball.draw();
	ball.x++;
	if (ball.x>canvas.width)
	{
		ball.x=5;
	}
	console.log(ball.x);
	window.requestAnimationFrame(drawMain);

}

init();
