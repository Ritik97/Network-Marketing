const User = require('../models/usermodel');
const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

exports.getUserList = (req, res, next) => {

    User.fetchAllUsers()
        .then(users => {

            res.render('userslist', { users: users });
        })
        .catch(err => {
            console.log(err);
        });

};

exports.getMemberList = (req , res , next) => {

    User.fetchAllMembers()
        .then(members => {

            res.render('memberlist' , { members : members });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postAddUser = (req, res, next) => {

    const db = getDb();
    const userid = req.body.userid;
    User.findById(userid)
        .then(user => {

            console.log(user);
            return db.collection('members')
                .insertOne(user)
                .then(result => {

                    console.log('Member Added');
                    return db.collection('user')
                        .deleteOne({ _id: new mongodb.ObjectID(userid.trim()) })
                        .then(resut => {
                            console.log('user deleted');
                            res.redirect('/admin/user-list');
                        });
                });
        })

        .catch(err => {
            console.log(err);
        });
};

exports.rejectUser = (req , res , next) => {

const userId = req.params.userid;
const db = getDb();
return db.collection('user')
    .deleteOne({ _id: new mongodb.ObjectID(userId.trim()) })
    .then(result => {
        console.log('User Rejected');
        res.redirect('/admin/user-list');
    })
    .catch(err => {
        console.log(err);
    });

};



