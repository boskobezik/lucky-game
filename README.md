# Lucky Game
#### Interview project for <img alt="nSoft" src="https://spark.ba/wp-content/uploads/2017/12/Nsoft_logo_2017-2.png" width="42">.

### Welcome to the Lucky Game repository!
For documentation I recommend you to take a look at the project <a href="https://github.com/boskobezik/lucky-game/wiki">**WIKI**</a>

Lucky Game is a Single Page Application (SPA) created using the **Vue CLI 4.x**. My editor of choice was **Visual Studio Code**.

### How to build and run:
After downloading the repo, navigate to it's directory with your favorite command line utility.

Before doing anything, run `npm install` to restore dependencies.

To debug, run `npm run serve` to host and run locally.

To build for production, run: `set NODE_ENV=production` then `npm run build`.

To unit test, run `npm run test:unit`.

**NOTE**: The linter won't allow you to compile if any of it's rules are broken. Try running `npm run lint`.

### Description:

Before starting work on this, I had to learn Vue.js. I've quickly finished a course on Pluralsight called "Vue.js Fundamentals" and this got me started. It took me 4 days to get the basics right.

The next day I've created the components based off the provided mockups. After that I connected the app to the socket with the handy snippet you left me. I started to utilize the Vuex store to manage my state. It didn't take me long to wrap everyhing up.

I don't know if this is intentional but I've noticed that the socket connection always returns the same data and the countdown time never gets updated.

That's it. I hope you like it :)
