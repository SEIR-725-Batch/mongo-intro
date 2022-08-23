require('./connection/db.connection');
const express = require('express');
const app = express();
require('dotenv').config();
let articleModel = require('./models/Article')
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    let articles = articleModel.find({})
    console.log(articles);
    context = {
        hello: articles
    }
    res.render('index.ejs', context)
})

app.post('/', (req, res) => {
    let article = req.body;
    articleModel.create(article);
    res.redirect('/');
})

app.listen(PORT, function() {
    console.log(`listening for port ${PORT}`)
})