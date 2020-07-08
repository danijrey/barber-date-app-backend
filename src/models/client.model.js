module.exports = (sequelize, DataTypes) => {

  const clientSchema = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    clientName: {
      type: DataTypes.STRING,
      noEmpty: true,
    },
    clientLastname: {
      type: DataTypes.STRING,
      noEmpty: true,
    },
    clientTelephone: {
      type: DataTypes.STRING,
      noEmpty: true,
    },
    clientEmail: {
      type: DataTypes.STRING,
      noEmpty: true,
    },
    clientPassword: {
    type: DataTypes.STRING,
    noEmpty: true,
    }
  }

  clientOps = {
    tableName: 'clients',
    timestamps: true,

  }

  const Client = sequelize.define('Client', clientSchema, clientOps);

  return Client;
}
