'use strict';
const Player = require('player');
const randomItem = require('random-item');
const sounds = require('./sounds.json');

module.exports = animal => {
	let sound = randomItem(sounds);

	if (animal) {
		sound = randomItem(sounds.filter(x => new RegExp(animal, 'i').test(x)));
	}

	return new Promise((resolve, reject) => {
		const player = new Player(sound);

		player.on('error', err => {
			if (err.includes('No next song was found')) {
				resolve(sound);
			}

			reject(err);
		});

		player.on('end', () => resolve(sound));
		player.play();
	});
};
