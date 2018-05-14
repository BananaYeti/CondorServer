var mongoose = require('mongoose');

var PartSchema = new  mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    adjectives : {
        type:Array,
        required:true,
        default:[]
    },
    noun : {
        type:Object,
        required:true,
        default:{}
    },
    suffix : {
        type:Object,
        required:true,
        default:{}
    },
    hardpointsLength : {
        type:Number,
        required:true,
        default: 4
    },
    hardpoints : {
        type:Array,
        required:true
    }
});

var Part = mongoose.model('Part', PartSchema);
module.exports = Part;
