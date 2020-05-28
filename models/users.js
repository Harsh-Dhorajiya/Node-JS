var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    firstname : {
        type : String,
        ref : 'User'
    },
    lastname : {
        type : String,
        ref : 'User'
    },
    admin : {
        type : Boolean,
        default : false
    }
});
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);