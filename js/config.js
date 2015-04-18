"use strict";
 
function get_config () {

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
		SCENES: {
			MENU: 1,
			NEW_ROUND: 2,
			ARENA: 3,
			GAME_OVER: 4
		},
		avatars_config: { // in case there is the time to do more than one playable character
			gladiator: {
				special_name: 'rocket', // THE "Unconventional Weapon" :)
				hp_max: 100, // player's hit points
				hitbox_radius: 0.07,
				idle_zone_radius: 0.15, // * 100% canvas height or canvas width, the smallest
				walk_zone_radius: 0.55, // away it's the run zone
				attack_origin: 0.1, // from the center of the canvas, to the direction, in % of the smallest canvas size ratio
				attack_radius: 0.1, // * 100% canvas height or canvas width, the smallest
				block_origin: 0.1, // like attack works
				block_radius: 0.1,
				special_range: 0.4, // like attack's origin works
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
			}
		},
		mobs_config: {
			swordmob: {
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
						img_name: "swordmob_spritesheet",
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

				}
			},
			bowmob: {

			},
			heavymob: {

			},
			fastmob: {

			},
			horsemob: {

			}
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