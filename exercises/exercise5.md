#5. Exercise 5 

##THE END... THE FRONT END!

We're about to implement a front-end rendered completely and dynamically in the browser.

###Step 1: Webpack Configuration.
Before we do anything, we need to set up **webpack** and our local resources. Webpack compiles our es6, JSX, css, html, and all of our React framework into web- and browser-safe JavaScript. Webpack is not only for React; it's simply a compiler. **Babel** does all the heavy lifting of translating the es6 and JSX into es5.

``` 
npm i -D babel babel-core babel-loader babel-preset-es2015 babel-preset-react bootstrap css-loader dotenv extract-text-webpack-plugin file-loader html-webpack-plugin html-webpack-template react react-bootstrap react-dom style-loader url-loader webpack webpack-dev-server 
```
We're installing this with the `-D` flag, meaning `--save-dev`, since we only need this locally. When the code goes live, we'll generate all our assets for distribution.

In the root of your project, let's `touch .babelrc` to store some presets for babel:

```
{
  "presets" : ["es2015", "react"],
  "compact" : true
}
```

Copy the file `/starter_resources/webpack.config.js` into the root of your project. Don't make any changes in this file. It's your _boilerplate_ compiler. 


###Step 2. Let's make some NPM shortcuts to control the building and rebuilding of our application.

Edit your `package.json` and make sure you have at least the following:
```
  "private": true,
  "scripts": {
    "clean": "rm -rf dist",
    "watch" : "webpack --watch",
    "prebuild": "npm run clean -s; npm install",
    "build": "webpack --progress --colors",
    "start": "node server.js"
  },
```

###Step 3. Let's make sure we've built everything properly.
Delete `node_modules` and run `npm run prebuild`


###Step 4. Start Ye Some React (Partner Time!)
We need to plan our React components. React components come in two major varieties: 
  1. Full React components that represent _state_.
  2. Light-weight components that receive _props_, **but no state**. 

Open `starter_resources/layout.html` in your favorite browser. 
  1. Diagram the major parts of the application. 
  2. What are the smallest functioning parts of this layout we can represent?
  3. Identify items that are repeated. Can these items be created in the abstract and reused in many places?
  4. Your application should only have one central source of truth: **the state**. How will you represent the state of the tasks?
  5. What's the main difference between the lists? Can this be generalized?
  6. BONUS: How does the state of the database correlate with the state of the application?

