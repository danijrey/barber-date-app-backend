const router = require('express').Router();
const clientController = require('../controllers/client.controller.js');

router.route('/all').get(clientController.all);
router.route('/create').post(clientController.create);
router.route('/:id').get(clientController.show);
router.route('/:id').put(clientController.update);
router.route('/:id').delete(clientController.delete);

module.exports = router;