const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
const mongoConnect = (callback) => {

MongoClient.connect('mongodb+srv://ritik:JvH5BXDdB5cgE6hF@cluster0-925sp.mongodb.net/test?retryWrites=true&w=majority')
.then(client =>{
    _db = client.db();
    //Console.log("Connected!");
    callback();
})
.catch(err =>{
    throw err;
});
};

const getDb = () => {

    if(_db){
    return _db;}
    
    throw 'No DataBase Found!';
};

exports.mongoConnect = mongoConnect; // to connect to the mongodb
exports.getDb = getDb; // to get the reference of the database
