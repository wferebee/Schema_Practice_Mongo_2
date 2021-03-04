const express = require("express");
const mongoose = require('mongoose');
var path = require('path');
const morgan = require("morgan");


const Employee = require('./model/index.js');
const conString = 'mongodb://127.0.0.1/employees';
mongoose.connect(conString, { useNewUrlParser: true, useUnifiedTopology: true });

const employeeRouter = require('./routes/index.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan("dev"));

app.use('/', employeeRouter);


const PORT = 3000;
app.listen(PORT, console.log("listening on port 3000"))

module.exports = app;