const express = require('express')
const router = express.Router()

router.use(express.urlencoded({ extended: false }))
router.use(express.json())

const articles = require('../models/Article')

router.get(':/id', async (req, res) => {
    try {
        let article = await articles.findById(req.params.id);
        res.json(article);
    } catch(err) {
        console.log(err);
    }
})

module.exports = router;