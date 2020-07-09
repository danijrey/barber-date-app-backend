const router = require('express').Router();
const appointmentController = require('../controllers/appointment.controller.js');

router.route('/all').get(appointmentController.all);
router.route('/').post(appointmentController.create);
router.route('/:id').get(appointmentController.show);
router.route('/:id').put(appointmentController.update);
router.route('/:id').delete(appointmentController.delete);

module.exports = router;