const express = require('express')
const router = express.Router()

router.use(express.urlencoded({ extended: false }))
router.use(express.json())

const articles = require('../models/Article')

router.get('/:id', async (req, res) => {
    try {
        let article = await articles.findById(req.params.id);
        res.json(article);
    } catch(err) {
        console.log(err);
    }
})

router.get('/', async (req, res) => {
    try {
        let myArticles = await articles.find({})
        console.log(myArticles);
        context = {
            hello: myArticles
        }
        res.json(myArticles);
    } catch (err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    try {
        let article = req.body;
        await articles.create(article);
        let allArticles = articles.find({});
        res.json(allArticles);
    } catch(err) {
        console.log(err);
    }
})

module.exports = router;