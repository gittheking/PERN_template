# PERN Single Page Application Template

## What is this?
Template to get started on a PERN stack Single Page Application (PostgreSQL, Express, React.js, Node.js)

### Technology Used
- [PG-Promise](https://github.com/vitaly-t/pg-promise)
  * To connect our PostgresSQL database
- [Express.js](https://expressjs.com/)
  * framework used for our API server
- [React.js](https://facebook.github.io/react/)
  * Client side library for our view layer
- [Webpack](http://webpack.github.io/docs/)
  * Application bundler used for our React client
- [Dotenv](https://github.com/motdotla/dotenv)
  * Loads `ENV` variables from a `.env` file
- [CSS Modules](https://github.com/css-modules/css-modules) - [Demo of CSS Modules with Webpack](https://github.com/css-modules/webpack-demo)

## Getting Started
**Install Node Module with**
```
$ npm install
```

**Run Webpack build and tell webpack to continue to watch for changes**
```
$ npm run watch
```
-  The `watch` script is used for developmnet. It "watches" your `src/` directory
for any changes and rebuilds your React Client to 

**Open another terminal window and start your server**
```
$ npm start
```

## What's in the box?

### Configuration Files
  - `webpack.config.js` - Our webpack configuration for bundlign our client application
  - `.babelrc` - Babel configuration file
  - `scripts/` - Contains scripts to be run at deployment (look into the `package.json` to see where each script should be used)

### Back End (API)
  - `server.js` - Express server entry point
  - `routes/` - Empty directory to store all of your server's API routes
  - `models/` - Empty directory to store all of your models
  - `db/` - Our database directory containing:
      * `db.js`
        - This is the database connection module that will use our Postgres
        `ENV` variables stored in our `.env` file
      * `schema.sql`
        - Empty SQL file that can be used to setup and edityour applications 
        relations
        - You can run this file in your CLI using `psql -d <your_databaase> -f db/schema.sql`
      * `seeds.sql`
        - Empty SQL file that can used to seed your database
        - You can run this file in your CLI using `psql -d <your_databaase> -f db/seeds.sql`

### Front End (React Client)
  - `src/` - Contains all of our React client's files
    * `index.js` - The client application's entry point as defined in our webpack config
    * `components/` - Directory to store all of our React components
      - `App.jsx` - Our React applicaiton container component
      - `App.css` - Basic styling for the `Hello World` application (check out the demo link of how to use css modules in the **Technology Used** section above)
      - `normaliz.css` - (Necolas's)[https://necolas.github.io/normalize.css/] CSS normalize

### Special Thanks
Webpack configuration inspired by [Jason Seminara](@jasonseminara)'s [React To Do Application](https://github.com/jasonseminara/react_to-do)
