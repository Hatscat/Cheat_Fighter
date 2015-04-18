"use strict";
 
function get_gladiator_config () {

	var config = {
		special_name: 'rocket', // THE "Unconventional Weapon" :)
		hp_max: 100, // player's hit points
		hitbox_radius: 0.07,
		anchor_x: -0.25, // from the image center, in % of image width
		anchor_y: 0, // from the image center, in % of image height
		idle_zone_radius: 0.15, // * 100% canvas height or canvas width, the smallest
		walk_zone_radius: 0.55, // away it's the run zone
		attack_origin: 0.1, // from the center of the canvas, to the direction, in % of the smallest canvas size ratio
		attack_radius: 0.1, // * 100% canvas height or canvas width, the smallest
		block_origin: 0.1, // like attack works
		block_radius: 0.1,
		block_repulsion_strength: 0.2,
		block_repulsion_resistance: 0.1,
		special_range: 0.4, // like attack's origin works
		special_speed: 20, // * delta_time
		special_explosion_radius: 0.4, // like attack's radius works
		attack_damage_min: 5,
		attack_damage_max: 24,
		special_damage: 50,
		walk_min_speed: 5,
		walk_max_speed: 10,
		run_min_speed: 15,
		run_max_speed: 20,
		charge_speed: 30,
		charge_min_range: 0.1,
		charge_max_range: 0.5,
		sprites: {
			idle: {
				img_name: "gladiator_spritesheet",
				anim_idx: [ 0 ],
				anim_speed: 50, // in ms, 100 = 10 fps
				loop: true
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
			special: {

			},
			hurt: {

			},
			die: {

			}
		},
		sounds: {
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
			special_launch: {

			},
			special_explosion: {

			},
			hurt: {

			},
			die: {

			}
		}
	};

	return config;
}