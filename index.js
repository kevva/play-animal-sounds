'use strict';

var sounds = require('./sounds.json');
var Player = require('player');
var unique = require('unique-random');

/**
 * Play animal sounds
 *
 * @param {String} animal
 * @api public
 */

module.exports = function (animal) {
	var sound = unique(0, sounds.length - 1)();

	if (animal) {
		sounds = sounds.filter(function (el) {
			return new RegExp(animal, 'gi').test(el);
		});

		sound = unique(0, sounds.length - 1)();
	}

	new Player(sounds[sound], { stream: true }).play();
};
