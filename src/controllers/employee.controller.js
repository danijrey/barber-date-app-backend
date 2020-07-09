const { Employee } = require('../db.js');

module.exports = {
  async all(req, res) {
    const employees = await Employee.scope({ attributes: { include: ['name'] } }).findAll();
    res.status(200).json(employees);
  },
  async create(req, res) {
    const employees = await Employee.create(req.body);
    res.status(200).json(employees);
  },
  async show(req, res) {
    const { id } = req.params;
    const employees = await Employee.scope({ include: [Recipe] }).findByPk(id);
    res.status(200).json(employees);
  },
  async update(req, res) {
    const { id } = req.params;
    let employees = await Employee.findByPk(id);
    employees = await employees.update(req.body);
    res.status(200).json(employees);
  },
  async delete(req, res) {
    const { id } = req.params;
    const employees = await Employee.findByPk(id);
    await employees.destroy();
    res.status(200).json(employees);
  }

}