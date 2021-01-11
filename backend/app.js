
require('./model/db');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const getroutes = require('./routes/userroute');

const app = express();

const ports = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors());

app.use('/images', express.static(path.join('images')));

app.use('/api/userroute', getroutes);