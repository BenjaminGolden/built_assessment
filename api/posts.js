const express = require('express');
const postController = require('../controllers/postController');
const api = express.Router();

const use = fn => (req, res, next) =>
Promise.resolve(fn(req, res, next)).catch(next);

api.post('/api/posts', use(postController.create));

api.get('/api/posts', use(postController.get));

api.get('/api/posts/:id', use(postController.getById));

api.get('/api/posts/category/:id', use(postController.getByCategoryId));

api.put('/api/posts/:id', use(postController.update));

api.delete('/api/posts/:id', use(postController.delete));

module.exports = api;