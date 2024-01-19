const express = require('express');
const categoryController = require('../controllers/categoryController');
const api = express.Router();

const use = fn => (req, res, next) =>
Promise.resolve(fn(req, res, next)).catch(next);

api.get('/api/categories', use(categoryController.get));

api.get('/api/categories/:id', use(categoryController.getById));

module.exports = api;