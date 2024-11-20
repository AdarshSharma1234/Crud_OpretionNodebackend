const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/storageDate')
.then(() => {
console.log('MongoDB database is connected');
})
.catch(err => {
console.error('Failed to connect to MongoDB', err);
});
app.listen(3000, () => {
console.log('Server is running on port 3000');
});

