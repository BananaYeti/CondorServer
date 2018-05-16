var passportUtil = require('../userAuth/passport');
var mechUtil = require('./mechUtil');

module.exports = function(app){
    app.get('/myMech', passportUtil.verifyUserRoute, function(req, res, next){
        if(req.decoded){
            var uid = req.decoded.id;
            var mech = mechUtil.getMech(uid, (mech) => {
                mech = mechUtil.cleanMech(mech);
                if(mech){
                    res.status(200).send(mech);
                } else {
                    res.status(400).send("Error: no mech found");
                }
            });
        } else {
            res.status(401).send('Error: you are not authenticated');
        }
    });
    app.post('/rmPart', passportUtil.verifyUserRoute, function(req,res,next){
        if(req.decoded){
            var uid = req.decoded.id;
            var mech = mechUtil.getMech(uid, (mech) => {
                mechUtil.removePart(mech,req.body.point,(mech) => {
                    mech = mechUtil.cleanMech(mech);
                    if(mech){
                        res.status(200).send(mech);
                    } else {
                        res.status(400).send("Error: no mech found");
                    }
                })
            });
        } else {

        }
    });
    app.post('/instPart', passportUtil.verifyUserRoute, function(req,res,next){
        if(req.decoded){
            var uid = req.decoded.id;
            var mech = mechUtil.getMech(uid, (mech) => {
                mechUtil.installPart(mech,req.body.invSlot,req.body.point,(mech) => {
                    mech = mechUtil.cleanMech(mech);
                    if(mech){
                        res.status(200).send(mech);
                    } else {
                        res.status(400).send("Error: no mech found");
                    }
                })
            });
        } else {

        }
    });
    app.post('/mvPart', passportUtil.verifyUserRoute, function(req,res,next){
        if(req.decoded){
            var uid = req.decoded.id;
            var mech = mechUtil.getMech(uid, (mech) => {
                mechUtil.movePart(mech,req.body.point,req.body.endPoint,(mech) => {
                    mech = mechUtil.cleanMech(mech);
                    if(mech){
                        res.status(200).send(mech);
                    } else {
                        res.status(400).send("Error: no mech found");
                    }
                })
            });
        } else {

        }
    });
    app.post('/mkPart', passportUtil.verifyUserRoute, function(req,res,next){
        if(req.decoded){
            var uid = req.decoded.id;
            var mech = mechUtil.getMech(uid, (mech) => {
                mechUtil.makePart(mech,req.body.numAdj,(mech) => {
                    mech = mechUtil.cleanMech(mech);
                    if(mech){
                        res.status(200).send(mech);
                    } else {
                        res.status(400).send("Error: no mech found");
                    }
                })
            });
        } else {

        }
    })
    app.post('/givePart', passportUtil.verifyUserRoute, function(req,res,next){
        if(req.decoded){
            var uid = req.decoded.id;
            var mech = mechUtil.getMech(uid, (mech) => {
                mechUtil.givePart(mech,req.body.player,req.body.slot,(mech) => {
                    mech = mechUtil.cleanMech(mech);
                    if(mech){
                        res.status(200).send(mech);
                    } else {
                        res.status(400).send("Error: no mech found");
                    }
                })
            });
        } else {

        }
    })
}
