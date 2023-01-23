'use strict';

const Player = require('../config/schema.js');
const updateRecord = require('./updateRecord.js');

module.exports = (app) => {
    app.route('/')
        .get(function(req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        })

    app.route('/list')
        .get((req, res) => {
            Player.find({}, (err, records) => {
                let data = {};

                records.forEach((record) => {
                    record = record.toObject();
                    // delete record["_id"];
                    // delete record["__v"];
                    data[record.uid] = record.fullName;
                })
                res.send(data);
            });
        })

    app.route('/list/:uid')
        .get((req, res) => {
            console.log(req.params)
            Player.find({
                uid: req.params.uid
            }, (err, records) => {
                if (err) {
                    return res.status(500).send({
                        error: err
                    });
                }
                let record = records[0].toObject();
                delete record["_id"];
                delete record["__v"];
                res.send(record);
            })
        })

    app.route('/new')
        .post((req, res) => {
            let object = req.body;
            if (object.uid && object.dob && object.sport && object.team && object.gender && object.interests && object.location && object.description && object.fullName) {

                Player.check_uid(object.uid, (user) => {
                    if (!user) {
                        console.log(req.body);
                        let db_entry = {
                            uid: object.uid,
                            fullName: object.fullName,
                            sport: object.sport,
                            dob: object.dob,
                            team: object.team, 
                            interests: object.interests,
                            location: object.location,
                            description: object.description
                        };
                        // if (object.gender) {
                        //     db_entry.gender = object.gender[0];
                        // }
                        Player.create(db_entry, (err, record) => {
                            if (err) {
                                console.log("Server Error:" + err);
                                res.status(500);
                                res.type('txt').send("Internal Server Error");
                            }
                            console.log("Created ");
                            res.send({
                                uid: record.uid,
                                created: true
                            });
                        });
                    } else {
                        console.log("User Already Created");
                        res.send({
                            uid: object.uid,
                            created: false
                        });
                    }
                })

            } else {
                console.log("Error")
            }
        })

    app.route('/new/:uid')
        .put((req, res) => {
            updateRecord(req, res, req.params.uid);
        })

    // Respond not found to all the wrong routes
    app.use(function(req, res, next) {
        res.status(404);
        res.type('txt').send('Not found');
    });

    // Error Middleware
    app.use(function(err, req, res, next) {
        if (err) {
            res.status(err.status || 500)
                .type('txt')
                .send(err.message || 'SERVER ERROR');
        }
    })
}