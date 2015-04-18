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

	background(0, 0, 255);
}

function draw_new_round_sc (data) {

	background(0, 255, 0);
}

function draw_game_over_sc (data) {

	background(0, 0, 0);
}
