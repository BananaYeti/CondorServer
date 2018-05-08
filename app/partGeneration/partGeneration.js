const Mech = require('../models/mech.js');
const Part = require('../models/part.js');
const Grammars = require('grammars.js');

function generatePart(numAdj) {
  var partdata = {
      name:'',
      adjectives:[],
      noun:{},
      suffix{},
  }

  //// TODO: check adjective not already used.

  for (var i = 0; i < numAdj; i++) {
    var adjIndex = Math.floor((Math.random() * Grammars.adjectives.length) + 1)
    partdata.adjectives.push(Grammars.adjectives[adjIndex]);
    partdata.name +=         Grammars.adjectives[adjIndex].name;
  }

  var nounIndex = Math.floor((Math.random() * Grammars.nouns.length) + 1);
  partdata.noun.push(Grammars.nouns[nounIndex]);
  partdata.name +=   Grammars.nouns[nounIndex].name;

  var suffixIndex = Math.floor((Math.random() * Grammars.suffixes.length) + 1);
  partdata.suffix.push(Grammars.suffixes[suffixIndex]);
  partdata.name +=     Grammars.suffixes[suffixIndex].name;

  return Part.create(partdata, function(err, part){
      console.log('Creating new part');
      if(err){
          return done(err);
      }
      return done(null);
  });
}

module.exports = generatePart;
