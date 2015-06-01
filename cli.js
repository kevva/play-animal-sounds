#!/usr/bin/env node
'use strict';
var meow = require('meow');
var playAnimalSounds = require('./');

var cli = meow({
	help: [
		'Examples',
		'  $ play-animal-sounds',
		'  *animal sound*',
		'',
		'  $ play-animal-sounds cat',
		'  *meow*'
	].join('\n')
});

playAnimalSounds(cli.input.length ? cli.input[0] : null);
