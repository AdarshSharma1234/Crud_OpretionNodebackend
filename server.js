const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./route/authRoutes');
const paymentRoutes = require('./route/paymentRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);

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

