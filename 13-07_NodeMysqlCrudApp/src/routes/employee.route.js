const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

// Retrieve all employees
router.get('/', employeeController.findAll);

// Retrieve a single employee with id
router.get('/:id', employeeController.findById);

// Create a new employee
router.post('/', employeeController.create);

// Update a employee with id using put
router.put('/:id', employeeController.update);

// Update a employee with id using patch
router.patch('/:id', employeeController.update);

// Delete a employee with id
router.delete('/:id', employeeController.delete);


module.exports = router;

