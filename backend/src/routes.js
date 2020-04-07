const express = require('express');

const OngController      = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileCOntroller = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs' , OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents' , IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileCOntroller.index);
module.exports = routes;