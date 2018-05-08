const generatePart = require('partGeneration.js');
const Mech = require('../models/mech.js');

function setupRoutes(app) {

  app.post('/makePart', function (req, res, next) {
      console.log(req.body._id + 'wants to make a new part with ' + req.body.numAdj + 'adjectives.');
      generatePart(req.body.numAdj);
      //// TODO: attach new part to players mech.
      res.send('Part Created');
}

module.exports = setupRoutes;
