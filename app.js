const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoConnect = require('./util/database').mongoConnect;

const adminRoutes = require('./routes/adminroutes');
const userRoutes = require('./routes/userroutes');

app.set('view engine' , 'ejs');
app.set('views' , 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin' , adminRoutes);
app.use('/user' , userRoutes);
app.use('/' , (req , res , next) => {

res.status(404).send('<h1 align="center">Page Not Found <h1>');

});


mongoConnect( () =>{
app.listen(3000);
console.log("Connected!");
});


