# Welcome to the Lucky Game repository!
#### This is an interview project for <img alt="nSoft" src="https://spark.ba/wp-content/uploads/2017/12/Nsoft_logo_2017-2.png" width="42">.
For documentation I recommend you to take a look at the project <a href="https://github.com/boskobezik/lucky-game/wiki">**WIKI**</a>

Lucky Game is a Single Page Application (SPA) created using the **Vue CLI 4.x**. My editor of choice was **Visual Studio Code**.

## <img src="https://cdn1.iconfinder.com/data/icons/material-core/20/settings-32.png" width="32"/> How to build and run:
After downloading the repo, navigate to it's directory with your favorite command line utility.

<img src="https://cdn1.iconfinder.com/data/icons/material-core/19/file-download-16.png" width="12"/>  `npm install` to restore dependencies.

<img src="https://cdn1.iconfinder.com/data/icons/material-core/18/swap-horiz-16.png" width="12"/>  `npm run serve` to host and run locally in debug mode.

<img src="https://cdn1.iconfinder.com/data/icons/material-core/18/exit-to-app-16.png" width="12"/>  `set NODE_ENV=production` then `npm run build` to build for production.

<img src="https://cdn1.iconfinder.com/data/icons/material-core/20/check-circle-outline-16.png" width="12"/>  `npm run test:unit` to run tests.

**NOTE**: The linter won't allow you to compile if any of it's rules are broken. Try running `npm run lint`.

## <img src="https://cdn1.iconfinder.com/data/icons/material-core/22/visibility-32.png" width="32"/> Description:

Before starting work on this, I had to learn Vue.js. I've quickly finished a course on Pluralsight called "Vue.js Fundamentals". It took me four days to get started working on this assignment.

I started by creating the components based off the provided mockups. After that I connected the app to the web socket with the snippet I was given in the assignment document. I used Vuex store to manage my state and Vue Router to manage navigation.

I don't know if this is intentional but I've noticed that the socket connection always returns the same data and the countdown time never gets updated.

That's about it.
