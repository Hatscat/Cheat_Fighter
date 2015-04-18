"use strict";

function Mob (data, config, world_x, world_y) {

	var self = this;

	self.config = config;

	self.world_position = {
		x: world_x,
		y: world_y
	};

	self.screen_position = {
		x: -1000, // out of screen
		y: -1000
	};

	self.hp = self.config.hp_max;
}

Mob.prototype.update_screen_position = function () {

	this.screen_position.x = 0;
	this.screen_position.y = 0;
};
