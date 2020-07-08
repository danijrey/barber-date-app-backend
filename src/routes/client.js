const router = require('express').Router();
const clientController = require('../controllers/client.controller.js');

router.route('/').get(clientController.list);
router.route('/').post(clientController.create);
router.route('/:id').get(clientController.show);
router.route('/:id').put(clientController.update);
router.route('/:id').delete(clientController.delete);

module.exports = router;