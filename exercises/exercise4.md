#4. Exercise 4 

## Connect to the DB
 1. Create a `/models/task.js` file. This file will encapsulate all of your db interactions.
 2. `npm i -S pg-promise` from this file (and go thank @vitaly!)
 2. `npm i -D dotenv` in your server.js. This will simulate an environment without having to mess with your bash profile.
 3. The top of your `/models/task.js` file should look like this:
 ```
 'use strict'
const pg = require('pg-promise')({
    // Initialization Options
});
const config = {
    host:       process.env.DB_HOST,
    port:       process.env.DB_PORT,
    database:   process.env.DB_NAME,
    user:       process.env.DB_USER,
    password:   process.env.DB_PASS,
  };

const _db = pg(config);
```
 5. Create `.env` file in the root of your server directory with the following contents
    
```
DB_HOST=localhost
DB_USER=jseminara
DB_PASS=*********
DB_NAME=taskdb
DB_PORT=5432
NODE_ENV=development
```

 6. At the top of your `server.js` (under `use strict`), add the following:
 
```
  const env         = process.env.NODE_ENV || 'development';
  const DEV         = env==='development';
  const dotenv      = (DEV) ? require('dotenv').config() : undefined;
```


## The part where the queries comes in.
 1. Back in `/models/task.js`, export an unnamed object with methods that will serve as middleware.
 3. In `/routes/`, import your middleware from `/models/task.js`; name it `db`. 
 4. Build out your middleware with methods to interact with the database. Any results should be set to `res.rows`.
 5. In your `/routes/tasks.js`, insert your new middleware in each of the corresponding routes.
 6. Your database methods are now updated and useable. 

## Test away!
 7. Your new API ONLY accepts `application/json`. Try creating some records. What happens if you delete something?


