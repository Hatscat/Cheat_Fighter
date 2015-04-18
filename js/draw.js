"use strict";
 
function DRAW (data) {

	data.delta_time = 60 / frameRate(); // ratio à appliquer aux valeurs sensibles au framerate
	
	background(0);

	// frame rate 
	fill(0, 255, 0);
	textSize(width * 0.0225 | 0);
	text(frameRate()+0.5|0, 10, 30);
}
