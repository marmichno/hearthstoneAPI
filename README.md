# Hearthstone API

<div style="width:360px;max-width:100%;"><div style="height:0;padding-bottom:52.5%;position:relative;"><iframe width="360" height="189" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" src="https://imgflip.com/embed/51191n"></iframe></div><p><a href="https://imgflip.com/gif/51191n">via Imgflip</a></p></div>

## About project

App contains two modes - building deck, opening packs. In building deck mode you can choose class,
create deck containing 30 cards and view statistics about cost of creating it.
In open packs mode first you need to choose expansion with collectible cards then you may
open packs with five random cards. There are also some statistics about how much dust did
you get from each opened pack. 
Chances for each card is based on statistics from: https://hearthstone.gamepedia.com/Card_pack_statistics
I made this project using https://develop.battle.net/documentation/hearthstone/game-data-apis

## Tech

- react
- sass
- redux - state managmnet
- axios - handling request


## Installation

Download and install npm from https://www.npmjs.com/get-npm

And run those comands in project directory:
```sh
git clone https://github.com/marmichno/hearthstoneAPI.git
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
