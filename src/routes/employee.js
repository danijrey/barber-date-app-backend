const router = require('express').Router();
const employeeController = require('../controllers/employee.controller.js');
const { formData } = require('../utils/busboyMiddleware.js');

router.route('/all').get(employeeController.all);
router.route('/').post(formData,employeeController.create);
router.route('/:id').get(employeeController.show);
router.route('/:id').put(formData,employeeController.update);
router.route('/:id').delete(employeeController.delete);

module.exports = router;