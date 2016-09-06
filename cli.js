#!/usr/bin/env node
'use strict';
const meow = require('meow');
const playAnimalSounds = require('./');

const cli = meow(`
	Example
	  $ play-animal-sounds
	  $ play-animal-sounds cat
`);

playAnimalSounds(cli.input[0]).catch(err => {
	console.error(err.message);
	process.exit(1);
});
