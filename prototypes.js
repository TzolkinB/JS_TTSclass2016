var time = 0;
var gravity = 0.5;

//extend the particle class from exercise one

function Particle(startX, startY) {
	this.x = startX;
	this.y = startY;
	this.velocity = {
		x: 0,
		y: 0
	}
}

Particle.prototype = {

	getVelocity: function() {
		return time * gravity;
	},
	move: function(){
		
		if ( y < 500) {
		return getVelocity + y;
		} else
			console.log('bottom');
	}
}

var pArray = [];
for( i = 0; i < 100; i++) {
	pArray.push(i, (Math.random()*500));
}

// loop time 
setInterval( function(){
	for (var n = 0; n < pArray.length; n++) {
		if (pArray[n].y < 500) {
			pArray[n].move();
		}
	}
	console.log(time);
	time++;
}, 100)

// end loop 