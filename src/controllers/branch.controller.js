const { Branch } = require('../db.js');

module.exports = {
  async list(req, res) {
    const branchs = await Branch.scope({ attributes: { include: ['name'] } }).findAll();
    res.status(200).json(branchs);
  },
  async create(req, res) {
    const branchs = await Branch.create(req.body);
    res.status(200).json(branchs);
  },
  async show(req, res) {
    const { id } = req.params;
    const branchs = await Branch.scope({ include: [Recipe] }).findByPk(id);
    res.status(200).json(branchs);
  },
  async update(req, res) {
    const { id } = req.params;
    let branchs = await Branch.findByPk(id);
    branchs = await branchs.update(req.body);
    res.status(200).json(branchs);
  },
  async delete(req, res) {
    const { id } = req.params;
    const branchs = await Branch.findByPk(id);
    await branchs.destroy();
    res.status(200).json(branchs);
  }

}