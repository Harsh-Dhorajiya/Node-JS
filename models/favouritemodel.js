const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Dishes = require('./dishes');
const Users = require('./users')
const favouriteSchema = new Schema(
    {
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : Users
        },
        dishes : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : Dishes
        }]
    },{
        timestamps : true
    }
);

var Favourite = mongoose.model('Favourite',favouriteSchema);

module.exports = favouriteSchema;