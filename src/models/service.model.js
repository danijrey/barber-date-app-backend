const db = require("../db");
const { Branch } = require("../db");

module.exports = (sequelize, DataTypes) => {

  const serviceSchema = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    serviceName: {
      type: DataTypes.STRING,
      noEmpty: true,
    },
    serviceCost: {
      type: DataTypes.STRING,
      noEmpty: true,
    },
    serviceDuration: {
      type: DataTypes.STRING,
      noEmpty: true,
    }
  }

  serviceOps = {
    tableName: 'services',
    timestamps: true,

  }

  const Service = sequelize.define('Service', serviceSchema, serviceOps);

  Service.associate = (db) => {
    db.Service.belongsToMany(db.Branch, { through: 'BranchService' });
    db.Service.belongsToMany(db.Employee, { through: 'ServiceEmployee' });
    db.Service.hasMany(db.Appointment);
  }
  
  return Service;
}