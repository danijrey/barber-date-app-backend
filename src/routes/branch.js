const router = require('express').Router();
const branchController = require('../controllers/branch.controller.js');
const { formData } = require('../utils/busboyMiddleware.js');

router.route('/all').get(branchController.all);
router.route('/').post(branchController.create);
router.route('/:id').get(branchController.show);
router.route('/:id').put(formData, branchController.update);
router.route('/:id').delete(branchController.delete);

module.exports = router;