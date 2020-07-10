const router = require('express').Router();
const appointmentController = require('../controllers/appointment.controller.js');
const { auth } = require('../utils/authMiddleware.js');


router.route('/all').get(appointmentController.all);
router.route('/').post(auth, appointmentController.create);
router.route('/:id').get(appointmentController.show);
router.route('/:id').put(appointmentController.update);
router.route('/:id').delete(appointmentController.delete);

module.exports = router;