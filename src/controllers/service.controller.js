const { Service } = require('../db.js');

module.exports = {
  async list(req, res) {
    const services = await Service.scope({ attributes: { include: ['name'] } }).findAll();
    res.status(200).json(services);
  },
  async create(req, res) {
    const services = await Service.create(req.body);
    res.status(200).json(services);
  },
  async show(req, res) {
    const { id } = req.params;
    const services = await Service.scope({ include: [Recipe] }).findByPk(id);
    res.status(200).json(services);
  },
  async update(req, res) {
    const { id } = req.params;
    let services = await Service.findByPk(id);
    services = await services.update(req.body);
    res.status(200).json(services);
  },
  async delete(req, res) {
    const { id } = req.params;
    const services = await Service.findByPk(id);
    await services.destroy();
    res.status(200).json(services);
  }

}