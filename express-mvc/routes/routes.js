const express = require('express');
const router = express.Router();
// コントローラーからコールバックに使う関数をインポートする
const controller = require('../controllers/controller');

router.get('/create', controller.blogCreatePage);

router.post('/', controller.createdBlogPost);

router.get('/', controller.blogIndex);

router.get('/about/:id', controller.blogAbout);

router.delete('/about/:id', controller.blogDelete);

module.exports = router;
