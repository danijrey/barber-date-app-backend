const router = require('express').Router();
const serviceController = require('../controllers/service.controller.js');

router.route('/').get(serviceController.list);
router.route('/').post(serviceController.create);
router.route('/:id').get(serviceController.show);
router.route('/:id').put(serviceController.update);
router.route('/:id').delete(serviceController.delete);

module.exports = router;