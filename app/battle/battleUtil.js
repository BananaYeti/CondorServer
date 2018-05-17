function sumDamage(tab) {
  var sum = 0;
  tab.forEach(function(d) {
    sum += d;
  })
  return sum;
}

function getPartStats(part) {

  statBlock = {};


  (part.noun.stats.speed == null) ? 
    statBlock.speed = 0 : 
    statBlock.speed = part.noun.stats.speed;
  (part.noun.stats.attack == null) ? 
    statBlock.attack = {} : 
    statBlock.attack = part.noun.stats.attack;
  (part.noun.stats.accuracy == null) ? 
    statBlock.accuracy = 0 : 
    statBlock.accuracy = part.noun.stats.accuracy;
  (part.noun.stats.dodge == null) ? 
    statBlock.dodge = 0 : 
    statBlock.dodge = part.noun.stats.dodge;
  (part.noun.stats.critChance == null) ? 
    statBlock.critChance = 0 : 
    statBlock.critChance = part.noun.stats.critChance;
  (part.noun.stats.critMult == null) ? 
    statBlock.critMult = 0 : 
    statBlock.critMult = part.noun.stats.critMult;
  (part.noun.stats.hp == null) ? 
    statBlock.hp = 0 : 
    statBlock.hp = part.noun.stats.hp;

  if (part['size']) {
    statBlock.power = 100+(part['size']*100);
  } else {
    if (part.noun.stats.power == null) {
      statBlock.power = 
      -((sumDamage(statBlock.attack)/statBlock.speed)*statBlock.accuracy)
      *(1+statBlock.critChance*statBlock.critMult);
    } else {
      statBlock.power = part.noun.stats.power;
    }
  }

  //// TODO: resistances, adjectives

  statBlock.resistances = {};
  statBlock.vulnerabilites = {};

  /*
  part.adjectives.forEach(function(adj) {
    adj.forEach(function(stat) {

    })
  })
  */

  stats.attack.forEach(function(item) {
    item += item*part.suffix.multiplier;
  });
}

module.exports = {
  getPartStats
}
