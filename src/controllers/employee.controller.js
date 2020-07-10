const { Employee } = require('../db.js');

module.exports = {
  async all(req, res) {
    try{
    const employees = await Employee.findAll();
    res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async create(req, res) {
    try{
    const { file, ...data } = req.body;
    const employees = await Employee.create({
      ...data,
      picture: file.secure_url,
      });
    res.status(200).json(employees);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async show(req, res) {
    try{
    const { employeeId } = req.params;
    const employees = await Employee.findByPk(employeeId);
    res.status(200).json(employees);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async update(req, res) {
    try{
    const { employeeId } = req.params;
    const { file, ...data } = req.body;
    let employees = await Employee.findByPk(employeeId);
    employees = await employees.update({
        ...data,
        picture: file.secure_url,
      });
    res.status(200).json(employees);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async delete(req, res) {
    try{
    const { employeeId } = req.params;
    const employees = await Employee.findByPk(employeeId);
    await employees.destroy();
    res.status(200).json(employees);
    } catch (error) {
        res.status(400).json({ message: error.message });
      }
  }

}