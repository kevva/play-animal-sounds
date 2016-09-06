# play-animal-sounds [![Build Status](http://img.shields.io/travis/kevva/play-animal-sounds/master.svg?style=flat)](http://travis-ci.org/kevva/play-animal-sounds)

> Play animal sounds


## Install

```
$ npm install --save play-animal-sounds
```

On Debian/Ubuntu, the [ALSA](http://www.alsa-project.org/) backend is used by default, so be sure to have the `alsa.h` header file in place:

```
$ sudo apt-get install libasound2-dev
```


## Usage

```js
const playAnimalSounds = require('play-animal-sounds');

playAnimalSounds().then(() => {
	console.log('animal sound played');
});

playAnimalSounds('cat').then(() => {
	console.log('cat sound played');
});
```


## CLI

```
$ npm install --global play-animal-sounds
```

```
$ play-animal-sounds --help

  Example
    $ play-animal-sounds
    $ play-animal-sounds cat
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
