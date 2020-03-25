const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.ListOngs);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.ListByOng);

routes.get('/incidents', IncidentsController.ListIncidents);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.DeleteIncident);
   

module.exports = routes;
