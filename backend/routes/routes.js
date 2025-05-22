var express = require('express');

const router = express.Router();

var userController = require('../src/user/userController');

router.route('/user/getUser').post(userController.getDataConntrollerfn);

router.route('/user/create').post(userController.createUserControllerFn);

router.route('/user/addIncome/:id').post(userController.addIncomeControllerFn)

router.route('/user/deleteIncome/:id').post(userController.deleteIncomeControllerFn)

router.route('/user/getAllUserIncomes/:id').get(userController.getAllIncomesControllerFn)

module.exports = router;