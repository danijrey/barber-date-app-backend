const router = require('express').Router();
const employeeController = require('../controllers/employee.controller.js');

router.route('/all').get(employeeController.all);
router.route('/').post(employeeController.create);
router.route('/:id').get(employeeController.show);
router.route('/:id').put(employeeController.update);
router.route('/:id').delete(employeeController.delete);

module.exports = router;