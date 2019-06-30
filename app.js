const express = require('express');
const app = express();
const apiRouter = require('./routes/apiRouter');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoApiUsers', {useNewUrlParser: true});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
//     res.header("Access-Control-Allow-Headers", "*");
//     next();
// });

app.use('/api', apiRouter);

app.listen(3000, err => {
    err ? console.log(err) : console.log('Listening 3000...');
});
