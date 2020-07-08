
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
    branchDescrption: {
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

  return Branch;
}
