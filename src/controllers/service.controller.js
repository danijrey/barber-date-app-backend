const { Service, Branch } = require('../db.js');

module.exports = {
  async all(req, res) {
    try{
    const services = await Service.findAll();
    res.status(200).json(services);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async list(req, res) {
    try {
      const { branchId } = req.params;
      
      const services = await Branch
      .scope({ include: Service })
        .findAll({ where: { id: branchId } });
       /* services.hasBranch(branchId); */

      

      res.status(200).json(services);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async create(req, res) {
    try{
    const { branchId } = req.params;
    const services = await Service.create(req.body);

    services.addBranch(branchId);
    await services.save();

    res.status(200).json(services);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async show(req, res) {
    try{
    const { id } = req.params;
    const services = await Service.findByPk(id);
    res.status(200).json(services);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async update(req, res) {
    try{
    const { id } = req.params;
    let services = await Service.findByPk(id);
    services = await services.update(req.body);
    res.status(200).json(services);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async delete(req, res) {
    try{
    const { id } = req.params;
    const services = await Service.findByPk(id);
    await services.destroy();
    res.status(200).json(services);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

}
