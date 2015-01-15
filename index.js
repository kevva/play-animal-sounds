'use strict';

var got = require('got');
var Lame = require('lame');
var sounds = require('./sounds.json');
var Speaker = require('speaker');
var unique = require('unique-random');

/**
 * Play animal sounds
 *
 * @param {String} animal
 * @api public
 */

module.exports = function (animal) {
	var decoder = new Lame.Decoder();
	var sound = unique(0, sounds.length - 1)();

	if (animal) {
		sounds = sounds.filter(function (el) {
			return new RegExp(animal, 'gi').test(el);
		});

		sound = unique(0, sounds.length - 1)();
	}

	decoder.on('format', function (format) {
		this.pipe(new Speaker(format));
	});

	got(sounds[sound]).pipe(decoder);
};
