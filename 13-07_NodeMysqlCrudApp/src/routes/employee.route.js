const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

// Create a new employee
router.post('/', employeeController.create);

// Retrieve all emplyees
router.get('/', employeeController.findAll);

// Retrieve a single employee with id
router.get('/:id', employeeController.findById);

module.exports = router;
