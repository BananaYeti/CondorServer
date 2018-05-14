var mongoose = require('mongoose');

var MechSchema = new  mongoose.Schema({
    name : {
        type:String,
        required:true,
        default:'Mech'
    },
    hardpointsLength : {
        type:Number,
        required:true,
        default: 4
    },
    hardpoints : {
        type:Array,
        required:true,
        default:[]
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId, ref:'User'
    },
    inventory:{
        type:Array,
        default:[]
    }
});

var Mech = mongoose.model('Mech', MechSchema);
module.exports = Mech;
