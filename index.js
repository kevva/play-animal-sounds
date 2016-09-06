'use strict';
const path = require('path');
const Conf = require('conf');
const download = require('download');
const filenamify = require('filenamify');
const isOnline = require('is-online');
const pify = require('pify');
const Player = require('player');
const randomItem = require('random-item');
const xdgBasedir = require('xdg-basedir');
const sounds = require('./sounds.json');

const playSound = sound => new Promise((resolve, reject) => {
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

module.exports = animal => {
	const config = new Conf();
	const sound = randomItem(animal ? sounds.filter(x => new RegExp(animal, 'i').test(x)) : sounds);

	if (!sound) {
		return Promise.reject(new Error('Sound not found'));
	}

	const name = filenamify(path.basename(sound));
	const dest = path.join(xdgBasedir.data, name);
	const cached = config.get(name);

	if (cached) {
		return playSound(cached);
	}

	return pify(isOnline)().then(online => {
		if (!online) {
			throw new Error('Couldn\'t play sound, check your internet connection');
		}

		return download(sound, xdgBasedir.data).then(() => {
			config.set(name, dest);
			return playSound(dest);
		});
	});
};
