const express = require('express');
const route = express.Router();
const controller = require('../controller/edit-user');
route.get('/add-user', controller.getAdd);
route.post('/add-user', controller.postAdd);
route.get('/update-user/:id', controller.getUpdate);

//API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;
