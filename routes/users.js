const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');



router.use(express.urlencoded({ extended: true }));//parser for form
router.post('/create', usersController.profile);
router.post('/delete',usersController.profileDel);




module.exports = router;