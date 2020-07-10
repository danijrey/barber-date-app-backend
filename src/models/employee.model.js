module.exports = (sequelize, DataTypes) => {

  const employeeSchema = {
    employeeId: {
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

  Employee.associate = (db) => {
    db.Employee.belongsTo(db.Branch);
    db.Employee.belongsToMany(db.Service, { through: 'EmployeeService' });
    db.Employee.hasMany(db.Appointment);
  }

  return Employee;
}