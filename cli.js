#!/usr/bin/env node
'use strict';

var playAnimalSounds = require('./');
var meow = require('meow');

meow({
	help: [
		'Example',
		'  $ play-animal-sounds',
		'  *animal sound*'
	].join('\n')
});

playAnimalSounds(process.argv.slice(2)[0]);
