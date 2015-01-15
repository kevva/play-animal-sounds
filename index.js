'use strict';

var got = require('got');
var Lame = require('lame');
var sounds = require('./sounds.json');
var Speaker = require('speaker');
var unique = require('unique-random')(0, sounds.length - 1);

/**
 * Play animal sounds
 *
 * @api public
 */

module.exports = function () {
	var decoder = new Lame.Decoder();

	decoder.on('format', function (format) {
		this.pipe(new Speaker(format));
	});

	got(sounds[unique()]).pipe(decoder);
};
