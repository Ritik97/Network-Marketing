const User = require('../models/usermodel');

exports.getAddUser = (req , res , next) =>{

res.render('userform');

};

exports.postAddUser = (req, res , next) => {

const name = req.body.name;
const email = req.body.email;
const phone = req.body.phone;
const address = req.body.address;

const user = new User(name , email , phone , address);

user.save(user)
.then(result =>{

console.log('User Added');
res.redirect('/user/add-user');

})
.catch(err =>{

throw err;

});

};