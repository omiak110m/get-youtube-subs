const express = require('express');
const Subscribers = require('./models/subscribers.js');
const app = express();
const cors = require('cors');

// Our code goes here;

// get all subscribers data;

app.get('/subscribers', cors(), async (req, res) => {
    try {
        let result = await Subscribers.find();
        res.send(result);
    }
    catch (error) {
        console.log(error);
        res.send({ result: 'Some error occured!' });
    }
});

// get name and subscribers details;

app.get('/subscribers/names', cors(), async (req, res) => {
    try {
        let result = await Subscribers.find();
        result = result.map((item) => {
            return { name: item.name, subscribedChannel: item.subscribedChannel }
        })
        res.status(200).send(result);
    }
    catch (error) {
        res.send({ result: 'Some error Occured' })
    }
});

// get single user data;

app.get('/subscribers/:_id', cors(), async (req, res) => {
    try {
        let result = await Subscribers.find(req.params);
        if (result.length > 0) {
            res.status(200).send(result);
        }
        else {
            res.status(404).send({ result: 'Data not found' })
        }
    }
    catch (error) {
        res.status(404).send({ result: 'Server error' });
    }
});

module.exports = app;