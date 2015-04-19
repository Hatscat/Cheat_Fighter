"use strict";
 
function get_swordmob_config () {

	var config = {

		hp_max: 100,
		hitbox_radius: 0.07,
		anchor_x: -0.25,
		anchor_y: 0,
		attack_origin: 0.1,
		attack_radius: 0.1,
		block_origin: 0.1,
		block_radius: 0.1,
		block_repulsion_strength: 0.2,
		block_repulsion_resistance: 0.1,
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
				img_name: "swordmob_spritesheet",
				anim_idx: [ 0 ],
				anim_speed: 200 // in ms, 100 = 10 fps
			},
			walk: {
				img_name: "swordmob_spritesheet",
				anim_idx: [ 1, 2 ],
				anim_speed: 100,
				loop: true
			},
			run: {
				img_name: "swordmob_spritesheet",
				anim_idx: [ 3, 4 ],
				anim_speed: 50,
				loop: true
			},
			block: {
				img_name: "swordmob_spritesheet",
				anim_idx: [ 10, 11, 12, 13, 14 ],
				loop: false
			},
			attack: {
				img_name: "swordmob_spritesheet",
				anim_idx: [ 5, 6, 7, 8, 9 ],
				loop: false
			},
			charge: {
				img_name: "swordmob_spritesheet",
				anim_idx: [ 7 ],
				loop: true
			},
			hurt: {
				img_name: "gladiator_spritesheet",
				anim_idx: [ 15, 16, 17 ],
				loop: false
			},
			die: {
				img_name: "gladiator_spritesheet",
				anim_idx: [ 18, 19 ],
				loop: false
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