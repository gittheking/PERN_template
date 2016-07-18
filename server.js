'use strict'

// This tests to see if we have an environment.
// Only load the dotenv if we need it.
const env         = process.env.NODE_ENV || 'development';
const DEV         = env==='development';
const dotenv      = DEV && require('dotenv').config();

// regular stuff
const express     = require('express');
const bodyParser  = require('body-parser');
const logger      = require('morgan');
const path        = require('path');

const app         = express();
const PORT        = process.argv[2] || process.env.port || 3000;

// set up some logging
app.use( logger( DEV ? 'dev' : 'common') );

// we're only going to accept json
app.use(bodyParser.json());

app.use( express.static(path.join(__dirname, 'dist')));

// Let's go!
app.listen(PORT , () => console.log(`server here! listening on`, PORT ) );
