const express = require('express')
const {celebrate, Segments, Joi} = require('celebrate')


const connection = require('./database/connection')
const ongController = require('./controllers/OngControllers')
const incidentsController = require('./controllers/IncidentController')
const profileController = require('./controllers/ProfileController')
const sessionController = require('./controllers/SessionController')

const routes = express.Router()


routes.get('/ongs', ongController.index)
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    whatsapp: Joi.string().required().min(11).max(13),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), ongController.store)

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), incidentsController.index)
routes.post('/incidents', incidentsController.store)
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), incidentsController.delete)

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), profileController.index)


routes.post('/sessions', sessionController.store)


module.exports = routes
