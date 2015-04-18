"use strict";

function MOUSE_RELEASED (data) {

	switch (data.current_scene) {

		case data.SCENES_ID.ARENA :
			click_arena_sc(data);
		break;
		case data.SCENES_ID.MENU :
			click_menu_sc(data);
		break;
		case data.SCENES_ID.NEW_ROUND :
			click_new_round_sc(data);
		break;
		case data.SCENES_ID.GAME_OVER :
			click_game_over_sc(data);
		break;
	}
}

/** -------------------------------------------------------------- **/

function click_arena_sc (data) {

}

function click_menu_sc (data) {
	
}

function click_new_round_sc (data) {
	
}

function click_game_over_sc (data) {
	
}
