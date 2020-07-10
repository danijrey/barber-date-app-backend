module.exports = (sequelize, DataTypes) => {

  const clientSchema = {
    clientId: {
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
      validate: {
        isEmail: true,
      }
    },
    clientPassword: {
    type: DataTypes.STRING,
    noEmpty: true,
    }
  }

  clientOps = {
    tableName: 'clients',
    timestamps: true,
    defaultScope: {
      attributes: {
        exclude: ['clientPassword'],
      }
    }

  }

  const Client = sequelize.define('Client', clientSchema, clientOps);

  Client.associate = (db) => {
    db.Client.hasMany(db.Appointment);
   /*  db.Client.belongsToMany(db.Branch, { through: 'ClientBranch' }); */


  }
  return Client;
}
