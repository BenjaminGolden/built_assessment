const express = require('express');
const postController = require('../controllers/postController');
const api = express.Router();

const use = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

api.post('posts', use(postController.create));

api.get('/posts', use(postController.get));

api.get('/posts/:id', use(postController.getById));

api.get('/posts/category/:id', use(postController.getByCategoryId));

api.put('/posts/:id', use(postController.update));

api.delete('/posts/:id', use(postController.delete));

module.exports = api;