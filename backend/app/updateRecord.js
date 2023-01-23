'use strict';
const Player = require('../config/schema.js');


module.exports = (req, res) => {
    console.log(req.body);
    let object = req.body;
    let query = {
        'uid': object.uid
    };

    Player.findOneAndUpdate(query, object, {
        upsert: true
    }, (err, doc) => {
        if (err) return res.send(500, {
            error: err,
            updated: false
        });
        let obj = {
            uid: object.uid,
            updated: true
        };
        res.send(obj);
    });
}
