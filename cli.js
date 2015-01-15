#!/usr/bin/env node
'use strict';

var playAnimalSounds = require('./');
var meow = require('meow');

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
