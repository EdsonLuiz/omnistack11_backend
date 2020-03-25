const express = require('express')
const crypto = require('crypto')

const connection = require('./database/connection')
const ongController = require('./controllers/OngControllers')

const routes = express.Router()


routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.store)

module.exports = routes
