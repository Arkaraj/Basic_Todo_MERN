const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

app.use(cookieParser());
app.use(express.json());

//const uri = process.env.ATLAS_URI;
const port = process.env.PORT | 5000;

mongoose.connect('<dbname>', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Successfully connected to database');
});


const userRouter = require('./routes/User');
app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`express server started! Listning at ${port}!`);
});