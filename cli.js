#!/usr/bin/env node
'use strict';

var meow = require('meow');
var playAnimalSounds = require('./');

meow({
	help: [
		'Examples',
		'  $ play-animal-sounds',
		'  *animal sound*',
		'',
		'  $ play-animal-sounds cat',
		'  *meow*'
	].join('\n')
});

playAnimalSounds(process.argv.slice(2)[0]);
