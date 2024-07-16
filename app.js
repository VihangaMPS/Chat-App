const path = require("path");
const express = require('express');
const morgan = require('morgan');

const app = express(); // Main Router


const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

// -------- Middleware for Development logging ----------
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}








module.exports = app;


