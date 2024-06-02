const mongoose = require('mongoose');
const Brand = require('./models/BrandModel');

const uri = 'mongodb+srv://sabir:sabir123@cluster0.vbhw873.mongodb.net/';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));


const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));