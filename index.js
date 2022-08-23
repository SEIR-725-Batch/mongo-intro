require('./connection/db.connection');
const express = require('express');
const app = express();
let articleModel = require('./models/Article')
const PORT = 4000;
const articleController = require('./controllers/articles')

app.use('view engine', 'ejs');
app.use('', articleController)

app.get('/', async (req, res) => {
    try {
        let articles = await articleModel.find({})
        console.log(articles);
        context = {
            hello: articles
        }
        res.json(articles);
    } catch (err) {
        console.log(err);
    }
})

app.post('/', async (req, res) => {
    try {
        let article = req.body;
        await articleModel.create(article);
        let allArticles = articleModel.find({});
        res.json(allArticles);
    } catch(err) {
        console.log(err);
    }
})

app.listen(PORT, function() {
    console.log(`listening for port ${PORT}`)
})