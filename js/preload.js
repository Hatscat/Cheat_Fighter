"use strict";

function PRELOAD (data) {

	// fonts loading

	/*window.WebFontConfig = { // ???
		google: {
			families: data.fonts
		},
		active: function () {
			console.log("fonts loaded!");
		}
	};*/

	WebFont.load(data.fonts);

	// images loading
	/*for (var i in data.images) {

		data.images[i].img = loadImage(data.images[i].src);
	}*/

	// audio loading
	/*for (var i in data.audio) {

		data.audio[i].sound = loadSound(data.audio[i].src);
	}*/

}
