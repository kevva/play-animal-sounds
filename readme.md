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
var playAnimalSounds = require('play-animal-sounds');

playAnimalSounds();
//=> *animal sound*

playAnimalSounds('cat');
//=> *meow*
```


## CLI

```
$ npm install --global play-animal-sounds
```

```
$ play-animal-sounds --help

  Examples
    $ play-animal-sounds
    *animal sound*

    $ play-animal-sounds cat
    *meow*
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
