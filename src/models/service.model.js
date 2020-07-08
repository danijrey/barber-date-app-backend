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

  return Service;
}