const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Routes setup
const users = require('./routes/api/users.js');
const message = require('./routes/api/message.js');

// Setting stuff up
const app = express();
app.use( cors());
app.use(express.json())

// DB setup
const db = require('./config/keys.js').MongoURL;
const dbSettings = require('./config/keys.js').settings


mongoose.connect(db, dbSettings)
.then( () => console.log("Mongodb has connected"))
.catch(err => console.log(err))

// Routing
app.use('/api/users', users);
app.use('/api/messages', message);

const port = process.env.PORT || 4200;

app.listen(port, () => console.log(`Server started at ${port}`));



