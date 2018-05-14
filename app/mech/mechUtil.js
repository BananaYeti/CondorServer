var User = require('../models/user');
var Mech = require('../models/mech');
var Part = require('../models/part');
const Grammars = require('./grammars.js');

function cleanMech(mech){
    return Object.assign({},mech._doc,{_id:undefined, userID:undefined,__v:undefined});
}

function getMech(uid, callback){
    Mech.findOne({userID:uid}, function(err, mech){
        if(err){
            callback(null);
        }else {
            callback(mech);
        }
    });
}

function removePart(mech, point, done){
    var parent = getParent(mech, point);
    var part = getPart(mech, point);
    if(part == null || parent == null){
        done(mech);
    }
    parent.hardpoints[point[point.length - 1]] = null;
    mech.inventory = [...mech.inventory, part];
    mech.markModified('inventory');
    mech.markModified('hardpoints');
    console.log('..saving');
    console.log(mech);
    mech.save(function(err, mech){
        if(err){
            console.log(error);
            done(null);
        } else {
            done(mech);
        }
    });
}

function installPart(mech, invSlot, point, done){
    var parent = getParent(mech, point);
    var part = mech.inventory[invSlot]
    if(part == null || parent == null){
        done(mech);
    }
    parent.hardpoints[point[point.length - 1]] = part;
    mech.inventory.splice(invSlot,1);
    mech.markModified('inventory');
    mech.markModified('hardpoints');
    console.log('..saving');
    console.log(mech);
    mech.save(function(err, mech){
        if(err){
            console.error(err);
            done(null);
        } else {
            done(mech);
        }
    });
}

function makePart(mech, numAdj, done){
    var result = Math.random();
    var nounList;
    if(result < 0.33){
        nounList = Grammars.nouns.weapons;
    } else if (result < 0.7){
        nounList = Grammars.nouns.augments;
    } else {
        nounList = Grammars.nouns.appendages;
    }
    return partFromList(mech, numAdj, nounList, done);
}

function partFromList(mech, numAdj, nounList, done){
    var partdata = {
        name:'',
        adjectives:[],
        noun:{},
        suffix:{},
    }

    //// TODO: check adjective not already used.

    for (var i = 0; i < numAdj; i++) {
      var adjIndex = Math.floor((Math.random() * Grammars.adjectives.length))
      partdata.adjectives.push(Grammars.adjectives[adjIndex]);
      partdata.name += Grammars.adjectives[adjIndex].name+' ';
    }

    var nounIndex = Math.floor((Math.random() * nounList.length));
    partdata.noun = nounList[nounIndex];
    partdata.name += nounList[nounIndex].name+' ';

    var suffixIndex = Math.floor((Math.random() * Grammars.suffixes.length));
    partdata.suffix = Grammars.suffixes[suffixIndex];
    partdata.name += Grammars.suffixes[suffixIndex].name;

    if(partdata.noun.size){
        partdata['hardpoints'] = [];
        for(var i = 0; i < partdata.noun.size; i++){
            partdata.hardpoints.push(null);
        }
    }

    Part.create(partdata, function(err, part){
      if(err){
          console.log(err);;
      } else {
        mech.inventory = [...mech.inventory, part];
        mech.markModified('inventory');
        console.log('..saving');
        mech.save(function(err, mech){
            if(err){
                console.log(error);
                done(null);
            } else {
                done(mech);
            }
        });
      }
    });


}

function makeWeapon(mech, numAdj, done){
    var partdata = {
        name:'',
        adjectives:[],
        noun:{},
        suffix:{},
    }

    //// TODO: check adjective not already used.

    for (var i = 0; i < numAdj; i++) {
      var adjIndex = Math.floor((Math.random() * Grammars.adjectives.length))
      partdata.adjectives.push(Grammars.adjectives[adjIndex]);
      partdata.name += Grammars.adjectives[adjIndex].name+' ';
    }

    var nounIndex = Math.floor((Math.random() * Grammars.nouns.weapons.length));
    partdata.noun = Grammars.nouns.weapons[nounIndex];
    partdata.name += Grammars.nouns.weapons[nounIndex].name+' ';

    var suffixIndex = Math.floor((Math.random() * Grammars.suffixes.length));
    partdata.suffix = Grammars.suffixes[suffixIndex];
    partdata.name += Grammars.suffixes[suffixIndex].name;

    Part.create(partdata, function(err, part){
      if(err){
          console.log(err);;
      } else {
        mech.inventory = [...mech.inventory, part];
        mech.markModified('inventory');
        console.log('..saving');
        console.log(mech);
        mech.save(function(err, mech){
            if(err){
                console.log(error);
                done(null);
            } else {
                done(mech);
            }
        });
      }
    });


}

function movePart(mech, point, endPoint, done){
    var parent = getParent(mech, point);
    var endParent = getParent(mech, endPoint);
    var part = getPart(mech, point);
    var endPart = getPart(mech, endPoint);
    if(endPart != null || parent == null || part == null || endParent == null){
        return(mech);
    }
    parent.hardpoints[point[point.length - 1]] = null;
    endParent.hardpoints[endPoint[endPoint.length - 1]] = part;
    mech.markModified('inventory');
    mech.markModified('hardpoints');
    console.log('..saving');
    console.log(mech);
    mech.save(function(err, mech){
        if(err){
            console.log(error);
            done(null);
        } else {
            done(mech);
        }
    });
}

function swapParts(mech, pointA, pointB, done){
    var parentA = getParent(mech, pointA);
    var parentB = getParent(mech, pointB);
    var partA = getPart(mech, pointA);
    var partB = getPart(mech, pointB);
}

function getPart(mech, point){
    var part = mech;
    for(var index of point){
        if(part.hardpoints && part.hardpoints[index]){
            part = part.hardpoints[index];
        } else {
            return null;
        }
    }
    return part;
}

function givePart(mech, player, invSlot, done){
    //player.mech.inventory = [...mech.inventory, part];
    mech.inventory.splice(invSlot,1);
    mech.markModified('inventory');
    console.log('..saving');
    console.log(mech);
    mech.save(function(err, mech){
        if(err){
            console.log(error);
            done(null);
        } else {
            done(mech);
        }
    });
}

function getParent(mech, point){
    if(point.length < 1){
        return null;
    } else {
        var parentPoint = [...point];
        parentPoint.splice(-1,1);
        return getPart(mech, parentPoint);
    }
}

module.exports = {
    getMech,
    cleanMech,
    removePart,
    installPart,
    movePart,
    makePart
}
