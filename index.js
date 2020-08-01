//Library
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Routes setup
const users = require('./routes/api/users.js');

// Setting stuff up
const app = express();
app.use(bodyParser.json(), cors());

// DB setup
const db = require('./config/keys.js').MongoURL;
const dbSettings = require('./config/keys.js').settings


mongoose.connect(db, dbSettings)
.then( () => console.log("Mongodb has connected"))
.catch(err => console.log(err))

// Routing
app.use('/api/users', users);

const port = process.env.PORT || 4200;

app.listen(port, () => console.log(`Server started at ${port}`));



