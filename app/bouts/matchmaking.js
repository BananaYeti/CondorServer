function setupRoutes(app) {

  var inQueue = null;

  app.post('/matchmaking', function (req, res, next) {
      console.log('we have received a fight request from ' + req.body._id);
      if (inQueue) {
          if (inQueue['id'] != req.body._id) {
              res.send('Prepare for a whollop');
              inQueue['res'].send('Also prepare for a whollop');
          }
      } else {
          inQueue = {};
          inQueue['id'] = req.body._id;
          inQueue['res'] = res;
      }
  })

}

module.exports = setupRoutes;
