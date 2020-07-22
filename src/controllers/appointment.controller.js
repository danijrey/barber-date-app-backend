const { Appointment } = require('../db.js');


module.exports = {
  async all(req, res) {
    try{
    const appointments = await Appointment.findAll();
    res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async create(req, res) {
    try{
    const appointments = await Appointment.create(req.body);
    res.status(200).json(appointments);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async find(req, res) {
    try {
      const { id } = req.params;
      const appointments = await Appointment.findByPk(id);
      res.status(200).json(appointments);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async show(req, res) {
    try{
    const { id } = req.params;
    const appointments = await Appointment.findByPk(id);
    res.status(200).json(appointments);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async update(req, res) {
    try{
    const { id } = req.params;
    let appointments = await Appointment.findByPk(id);
    appointments = await appointments.update(req.body);
    res.status(200).json(appointments);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async delete(req, res) {
    try{
    const { id} = req.params;
    const appointments = await Appointment.findByPk(id);
    await appointments.destroy();
    res.status(200).json(appointments);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

}