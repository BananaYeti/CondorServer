var mongoose = require('mongoose');

var MechSchema = new  mongoose.Schema({
    name : {
        type:String,
        unique:false,
        required:true,
        default:'Mech'
    },
    hardpointsLength : {
        type:Number,
        unique:false,
        required:true,
        default: 4
    },
    hardpoints : {
        type:Array,
        unique:false,
        required:true,
        default:[]
    }
});

var Mech = mongoose.model('Mech', MechSchema);
module.exports = Mech;