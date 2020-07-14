
module.exports = (sequelize, DataTypes) => {

  const branchSchema = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    branchName: {
      type: DataTypes.STRING,
      noEmpty: true,
    },
    branchImage: {
      type: DataTypes.STRING,
      noEmpty: true,
    },
    branchDescription: {
      type: DataTypes.STRING,
      noEmpty: true,
    },
    branchTelephone: {
      type: DataTypes.STRING,
      noEmpty: true,
    },
    branchAdress: {
      type: DataTypes.STRING,
      noEmpty: true,
    }
  }

  branchOps = {
    tableName: 'branchs',
    timestamps: true,

  }

  const Branch = sequelize.define('Branch', branchSchema, branchOps);

  Branch.associate = (db) => {
    db.Branch.belongsToMany(db.Service, { through: 'BranchService' });
    db.Branch.hasMany(db.Employee);
    db.Branch.hasMany(db.Appointment);
  }



  return Branch;
}
