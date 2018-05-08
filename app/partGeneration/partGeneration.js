var Mech = require('../models/mech.js');
var Part = require('../models/part.js');
var

function generatePart() {
  var partdata = {
      stats:
  }
  Part.create(partdata, function(err, part){
      console.log('Creating new part');
      if(err){
          return done(err);
      }
      return done(null);
  });

}
