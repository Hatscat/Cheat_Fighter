"use strict";
 
function get_global_config () {

	var config = {

		arena_radius: 3, // * 100% of canvas height or canvas width, the biggest
		player_hp: 1,
		hp_bare_w_max: 0.8, // width max in % of canvas width
		hp_bare_h: 0.1,
		looping_power_sign_val: 0, // 0 to 1
		looping_power_sign_speed: 10, // * delta_time
		recup_delay: 300, // im ms, delays are the same for all !
		block_delay: 500,
		attack_delay: 800,
		fonts: {
			name: 'src url'
		},
		image_mode: CENTER,
		canvas: null,
		canvas_min_size_ratio: 1,
		canvas_max_size_ratio: 1,
		delta_time: 1,
		round_nb: 0,
		remaining_enemies: 1,
		glory: 0,
		glory_highscore: localStorage.glory_highscore || 0, // loading of the highscore
		old_glory: 0,
		old_glory_highscore: 0,
		music_volume: 1,
		sounds_volume: 1,
		current_scene: 0,
		mobs: [],
		mouse_pos: { x:0, y:0 },
		SCENES_ID: {
			MENU: 1,
			NEW_ROUND: 2,
			ARENA: 3,
			GAME_OVER: 4
		},
		avatars_config: { // in case there is the time to do more than one playable character
			gladiator: get_gladiator_config()
		},
		mobs_config: {
			swordmob: get_swordmob_config(),
			bowmob: get_bowmob_config(),
			horsemob: get_horsemob_config()
		},
		images: {
			gladiator_spritesheet: {
				src: 'url',
				cols: 3,
				rows: 2
			},
			// + mobs
			arena_sand: {

			},
			arena_tribune: {

			}
		},
		audio: {
			music: {
				src: 'url'
			},
			footstep_01: { // to walk & run sounds
				src: 'url'
			},
			shield_block_01: {
				src: 'url'
			},
			sword_attack_01: {
				src: 'url'
			},
			bow_attack_01: {
				src: 'url'
			},
			charge_scream_01: {
				src: 'url'
			},
			rocket_launch_01: {
				src: 'url'
			},
			rocket_explosion_01: {
				src: 'url'
			},
			hurting_cry_01: {
				src: 'url'
			},
			dying_scream_01: {
				src: 'url'
			},
			//etc.
		}

	};

	return config;
}