const { Service } = require('../db.js');

module.exports = {
  async all(req, res) {
    try{
    const services = await Service.findAll();
    res.status(200).json(services);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async create(req, res) {
    try{
    const { branchId } = req.params;
    const services = await Service.create(req.body);
    services.setBranch(branchId);
    await services.save();
    res.status(200).json(services);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async show(req, res) {
    try{
    const { serviceId } = req.params;
    const services = await Service.findByPk(serviceId);
    res.status(200).json(services);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async update(req, res) {
    try{
    const { serviceId } = req.params;
    let services = await Service.findByPk(serviceId);
    services = await services.update(req.body);
    res.status(200).json(services);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async delete(req, res) {
    try{
    const { serviceId } = req.params;
    const services = await Service.findByPk(serviceId);
    await services.destroy();
    res.status(200).json(services);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

}