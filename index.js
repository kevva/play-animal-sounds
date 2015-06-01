'use strict';
var Player = require('player');
var uniqueRandom = require('unique-random');
var sounds = require('./sounds.json');

module.exports = function (animal) {
	var sound = uniqueRandom(0, sounds.length - 1)();

	if (animal) {
		sounds = sounds.filter(function (el) {
			return new RegExp(animal, 'i').test(el);
		});

		sound = uniqueRandom(0, sounds.length - 1)();
	}

	new Player(sounds[sound])
		.enable('stream')
		.play();
};
