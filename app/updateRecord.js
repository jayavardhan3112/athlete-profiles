'use strict';
const Player = require('../config/schema.js');


module.exports = (req, res, uid) => {
    console.log(req.body);
    let object = req.body;
    let query = {
        'uid': uid
    };

    Player.findOneAndUpdate(query, object, {
        upsert: true
    }, (err, doc) => {
        if (err) return res.send(500, {
            error: err,
            updated: false
        });
        let obj = {
            uid: uid,
            updated: true
        };
        res.send(obj);
    });
}
