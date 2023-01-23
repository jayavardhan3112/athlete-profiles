'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    uid: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    sport: {
        type: Array,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    dob: {
        type: String,
        required: true,
        trim: true
    },
    team: {
        type: String,
        trim: true
    },
    interests: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }

});

schema.statics.check_uid = (uid, callback) => {
    Player.findOne({
        uid: uid
    }, (err, User) => {
        if (err) {
            console.log(err);
        }
        return callback(User);
    })
}

const Player = mongoose.model('Athletes', schema);
module.exports = Player;
