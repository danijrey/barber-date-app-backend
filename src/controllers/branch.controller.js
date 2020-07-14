const { Branch, Service } = require('../db.js');

module.exports = {
  async all(req, res) {
    try{
    const branchs = await Branch.findAll();
    res.status(200).json(branchs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async list(req, res) {
    try {
      const { branchId } = req.params;

      const services = await Service.findAll({ include: [Branch], where: { id: branchId } });
      /* services.hasBranch(branchId); */



      res.status(200).json(services);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async create(req, res) {
  try{
    console.log(req.body);
    const branchs = await Branch.create(req.body);
    res.status(200).json(branchs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  },
  async show(req, res) {
    try{
    const { id } = req.params;
    const branchs = await Branch.findByPk(id);
    res.status(200).json(branchs);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async update(req, res) {
    try{
    const { id } = req.params;
    const { file, ...data } = req.body;
    let branchs = await Branch.findByPk(id);
      branchs = await branchs.update({
        ...data,
        picture: file.secure_url,
      });
    res.status(200).json(branchs);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async delete(req, res) {
    try{
    const { id } = req.params;
    const branchs = await Branch.findByPk(id);
    await branchs.destroy();
    res.status(200).json(branchs);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

}
/* async create(req, res) {
  try {
    /* const { file, ...data } = req.body;
    console.log(req.body);
    const branchs = await Branch.create({
      ...data,
      picture: file.secure_url,
    });
    res.status(200).json(branchs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}, 

.scope({ include: [Service]}).findByPk(id)*/