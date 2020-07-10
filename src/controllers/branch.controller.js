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
  async create(req, res) {
  try{
    const { file, ...data } = req.body;
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
  async show(req, res) {
    try{
    const { branchId } = req.params;
    const branchs = await Branch.scope({ include: [Service]}).findByPk(branchId);
    res.status(200).json(branchs);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async update(req, res) {
    try{
    const { branchId } = req.params;
    const { file, ...data } = req.body;
    let branchs = await Branch.findByPk(branchId);
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
    const { branchId } = req.params;
    const branchs = await Branch.findByPk(branchId);
    await branchs.destroy();
    res.status(200).json(branchs);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

}