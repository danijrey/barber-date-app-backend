const { Appointment } = require('../db.js');

module.exports = {
  async list(req, res) {
    const appointments = await Appointment.scope({ attributes: { include: ['name'] } }).findAll();
    res.status(200).json(appointments);
  },
  async create(req, res) {
    const appointments = await Appointment.create(req.body);
    res.status(200).json(appointments);
  },
  async show(req, res) {
    const { id } = req.params;
    const appointments = await Appointment.scope({ include: [Recipe] }).findByPk(id);
    res.status(200).json(appointments);
  },
  async update(req, res) {
    const { id } = req.params;
    let appointments = await Appointment.findByPk(id);
    appointments = await appointments.update(req.body);
    res.status(200).json(appointments);
  },
  async delete(req, res) {
    const { id } = req.params;
    const appointments = await Appointment.findByPk(id);
    await appointments.destroy();
    res.status(200).json(appointments);
  }

}