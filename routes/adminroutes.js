 const express = require('express');
 const router = express.Router();

 const adminController = require('../controllers/admincontroller');

 router.get('/user-list' , adminController.getUserList);

 router.post('/add-user' , adminController.postAddUser);

 router.get('/reject-user/:userid' , adminController.rejectUser); 

 router.get('/member-list' , adminController.getMemberList);

 module.exports = router;