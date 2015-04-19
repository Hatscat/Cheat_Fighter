"use strict";
 
function DRAW (data) {

	data.delta_time = 60 / frameRate(); // for framerate independance
	
	switch (data.current_scene) {

		case data.SCENES_ID.ARENA :
			draw_arena_sc(data);
		break;
		case data.SCENES_ID.MENU :
			draw_menu_sc(data);
		break;
		case data.SCENES_ID.NEW_ROUND :
			draw_new_round_sc(data);
		break;
		case data.SCENES_ID.GAME_OVER :
			draw_game_over_sc(data);
		break;
	}

	// framerate visualisation
	fill(0, 255, 0);
	textSize(width * 0.0225 | 0);
	text(frameRate()+0.5|0, 10, 30);
}

/** -------------------------------------------------------------- **/

function draw_arena_sc (data) {

	background(255, 0, 0);
}

function draw_menu_sc (data) {

	//background(0, 0, 255);
	data.sand_graphic.background(255, 227, 128);
	data.sand_graphic.fill(200, 157, 64);
	
	/*for (var i = 500; i--;) {
		data.sand_graphic.rect(noise(i*3, 58) * (width+10) - 5 | 0, noise(7, i*5) * (height+10) - 5 | 0, 10, 10);
		//data.sand_graphic.drawingContext.fillRect(noise(i, millis()*100|0) * width | 0, noise(millis()*100|0, i) * height | 0, 20, 20);
		data.sand_graphic.rect(i * width | 0, i * height | 0, 5, 5);
	}*/

	//data.sand_graphic.fill(255);
	//data.sand_graphic.ellipse(0, 0, 100, 100);

	for (var i = 20; i--;) {
		data.sand_graphic.image(data.images.arena_sand.img, (i%6)*data.images.arena_sand.img.width, (i/6|0)*data.images.arena_sand.img.height);
	}

	image(data.sand_graphic, width/2|0, height/2|0);
}

function draw_new_round_sc (data) {

	background(0, 255, 0);
}

function draw_game_over_sc (data) {

	background(0, 0, 0);
}
