const express = require('express');
const mongoose = require('mongoose');


const app = require('./app');
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to Database
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://0.0.0.0:27017/subscribers').then(() => {
    console.log('connection successful');
})


// Start Server
app.listen(3000, () => console.log(`App listening on port 3000`));