"use strict";
 
function get_bowmob_config () {

	var config = {

		hp_max: 100,
		hitbox_radius: 0.07,
		attack_origin: 0.1,
		attack_radius: 0.1,
		block_origin: 0.1,
		block_radius: 0.1,
		attack_damage_min: 5,
		attack_damage_max: 24,
		walk_min_speed: 5,
		walk_max_speed: 10,
		run_min_speed: 15,
		run_max_speed: 20,
		charge_speed: 30,
		charge_min_range: 0.1,
		charge_max_range: 0.5,
		sprites: {
			idle: {
				img_name: "bowmob_spritesheet",
				anim_idx: [ 0 ],
				anim_speed: 50 // in ms, 100 = 10 fps
			},
			walk: {

			},
			run: {

			},
			block: {

			},
			attack: {

			},
			charge: {

			},
			hurt: {

			},
			die: {

			}
		},
		sounds: {
			block: {

			},
			attack: {

			},
			charge: {

			},
			hurt: {

			},
			die: {

			}
		}
	};

	return config;
}