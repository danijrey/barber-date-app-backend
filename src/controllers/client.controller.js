const { Client } = require('../db.js');

module.exports = {
  async all(req, res) {
    const clients = await Client.scope({ attributes: { include: ['name'] } }).findAll();
    res.status(200).json(clients );
  },
  async create(req, res) {
    const clients = await Client.create(req.body);
    res.status(200).json(clients );
  },
  async show(req, res) {
    const { id } = req.params;
    const clients = await Client.scope({ include: [Recipe] }).findByPk(id);
    res.status(200).json(clients );
  },
  async update(req, res) {
    const { id } = req.params;
    let clients = await Client.findByPk(id);
    clients = await clients .update(req.body);
    res.status(200).json(clients );
  },
  async delete(req, res) {
    const { id } = req.params;
    const clients = await Client.findByPk(id);
    await clients .destroy();
    res.status(200).json(clients );
  }

}