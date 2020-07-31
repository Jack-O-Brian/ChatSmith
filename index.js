//Library
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Routes setup
const users = require('./routes/api/users.js');

// Setting stuff up
const app = express();

// DB setup
const db = require('./config/keys.js').MongoURL;
const dbSettings = require('./config/keys.js').settings


mongoose.connect(db, dbSettings)
.then( () => console.log("Mongodb has connected"))
.catch(err => console.log(err))

// Routing
app.use('/api/users', users);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started at ${port}`));



