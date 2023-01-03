const mongoose = require('mongoose');
const SubscriberModel = require('./models/subscribers');
const data = require('./data');


// Connect to database
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://0.0.0.0:27017/subscribers').then(() => {
    console.log('Database Created.....');
})

const refreshAll = async () => {
    await SubscriberModel.deleteMany({});
    // console.log(connection);
    await SubscriberModel.insertMany(data);
    await mongoose.disconnect();
}
refreshAll();