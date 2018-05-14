const User = require('../models/user');
const Mech = require('../models/mech');
const Part = require('../models/part');

function upgradeDamage(item) {
  swi
}

function getWeaponFinalStats(weapon) {

  stats = weapon.noun.stats;

  /*
  weapon.adjectives.forEach(function(item) {
    if (stats[item]) {
      if (typeof stats[item] === "object") {
        item.forEach(function(attack) {
          if (item[attack]) {
            item[attack] += attack;
          } else {
            item[attack] = attack;
          }
        });
      } else {
        stats[item] += item;
      }
    } else {
      stat[item] = item;
    }
  });
  */

  stats.attack.forEach(function(item) {

    item += item*weapon.suffix.multiplier;
  });
}

function getHealth(part) {
    if (part) {
        var hp = 100 + (part.size*100);

        return hp;
    } else {
        return false;
    }
}

module.exports = {

}
