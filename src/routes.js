const express = require('express')
const crypto = require('crypto')

const connection = require('./database/connection')
const ongController = require('./controllers/OngControllers')
const incidentsController = require('./controllers/IncidentController')
const profileController = require('./controllers/ProfileController')
const sessionController = require('./controllers/SessionController')

const routes = express.Router()


routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.store)

routes.get('/incidents', incidentsController.index)
routes.post('/incidents', incidentsController.store)
routes.delete('/incidents/:id', incidentsController.delete)

routes.get('/profile', profileController.index)


routes.post('/sessions', sessionController.store)


module.exports = routes
