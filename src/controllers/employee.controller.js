const { Employee, Branch, Service } = require('../db.js');


module.exports = {
  async all(req, res) {
    try{
      const { branchId } = req.params;
      const employees = await Employee.findAll();
    res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async list(req, res) {
    try {
      const { branchId } = req.params;

      const employees = await Employee.findAll({ where: { BranchId: branchId } });

      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async listService(req, res) {
    try {
      const { serviceId } = req.params;

      const services = await Service
        .scope({ include: Employee })
        .findAll({ where: { id: serviceId } });
      /* services.hasBranch(branchId); */

      res.status(200).json(services);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async create(req, res) {
    try{
      const { branchId } = req.params;
      const employees = await Employee.create(req.body);

      employees.setBranch(branchId);
      await employees.save();

      employees.addService(serviceId);
      await employees.save();

      console.log(branchId);

      res.status(200).json(employees);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async show(req, res) {
    try{
    const { id } = req.params;
    const employees = await Employee.findByPk(id);
    res.status(200).json(employees);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async update(req, res) {
    try{
    const { id } = req.params;
    const { file, ...data } = req.body;
    let employees = await Employee.findByPk(id);
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
    const { id } = req.params;
    const employees = await Employee.findByPk(id);
    await employees.destroy();
    res.status(200).json(employees);
    } catch (error) {
        res.status(400).json({ message: error.message });
      }
  }

}
/* 
async create(req, res) {
  try {
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

,  where: { BranchId: id }


      const employees = await Employee
        .scope({ include: Branch })
        .findAll({where: {BranchId : id} });
        
        const employees = await Branch
        .scope({ include: Employee })
        .findAll({ where: { id: branchId }});
*/