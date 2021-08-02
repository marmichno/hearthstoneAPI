# Hearthstone API

Opening packs:
<br>
![paczki](https://user-images.githubusercontent.com/72525469/110540381-baf08f80-8126-11eb-886b-eb067fe6387e.gif)
<br>
Creating deck:
<br>
![dodawaniekart](https://user-images.githubusercontent.com/72525469/110540394-be841680-8126-11eb-9975-f283a3b6cae9.gif)

## About project

App contains two modes - building deck, opening packs. In building deck mode you can choose class,
create deck containing 30 cards and view statistics about cost of creating it.
In open packs mode first you need to choose expansion with collectible cards then you may
open packs with five random cards. There are also some statistics about how much dust did
you get from each opened pack.
<br> 
Chances for each card is based on statistics from: https://hearthstone.gamepedia.com/Card_pack_statistics
<br>
I made this project using: https://develop.battle.net/documentation/hearthstone/game-data-apis
<br>
App live: https://hearthstone-api-app.herokuapp.com/

## Tech

- react
- sass
- redux - state managmnet
- axios - handling request
- chartJS - visualising data
- react router -  declarative routing


## Installation

Download and install npm from https://www.npmjs.com/get-npm

And run those comands in project directory:
```sh
git clone https://github.com/marmichno/hearthstoneAPI.git
npm install
npm install --save react-chartjs-2 chart.js
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
