const router = require('express').Router();
const branchController = require('../controllers/branch.controller.js');

router.route('/').get(branchController.list);
router.route('/').post(branchController.create);
router.route('/:id').get(branchController.show);
router.route('/:id').put(branchController.update);
router.route('/:id').delete(branchController.delete);

module.exports = router;