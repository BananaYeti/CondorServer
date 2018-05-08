var mongoose = require('mongoose');

var PartSchema = new  mongoose.Schema({
    name : {
        type:String,
        unique:false,
        required:true
    },
    stats : {
        type:Array,
        unique:false,
        required:true,
        default:[]
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
        required:true
    }
});

var Part = mongoose.model('Part', PartSchema);
module.exports = Part;
