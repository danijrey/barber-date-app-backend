module.exports = (sequelize, DataTypes) => {

  const employeeSchema = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    employeeName: {
      type: DataTypes.STRING,
      noEmpty: true,
    },
    employeeImage: {
      type: DataTypes.STRING,
      noEmpty: true,
    },
    employeeDescription: {
      type: DataTypes.STRING,
      noEmpty: true,
    }
  }

  employeeOps = {
    tableName: 'employees',
    timestamps: true,

  }

  const Employee = sequelize.define('Employee', employeeSchema, employeeOps);

  return Employee;
}