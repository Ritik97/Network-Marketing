const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

class User {

    constructor(name , email , phone , address ){

        this.name = name;
        this.email = email; 
        this.phone = phone;
        this.address = address;
    }

    save(){

        const db = getDb();
        return db.collection('user')
        .insertOne(this)
        .then(result =>{ 
            console.log(result);
        })
        .catch(err =>{
            console.log(err);
        });
    };

    static fetchAllUsers(){

        const db = getDb();
        return db.collection('user')
        .find()
        .toArray()
        .then(users =>{
            return users;
        })
        .catch(err =>{
            console.log(err);
        });

    };

    static fetchAllMembers(){

        const db = getDb();
        return db.collection('members')
        .find()
        .toArray()
        .then(members => {
            return members;
        })
        .catch(err => {
            console.log(err);
        });
    };

    static findById(UserId){

       const db = getDb();
       return db.collection('user')
       .find({ _id : new mongodb.ObjectID(UserId.trim()) })
        .next()
        .then(user =>{
            return user;
        })
        .catch(err=>{
            console.log(err);
        });

    };

}

module.exports = User;