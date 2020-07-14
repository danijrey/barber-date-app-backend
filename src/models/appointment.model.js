module.exports = (sequelize, DataTypes) => {

  const appointmentSchema = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    date: {
      type: DataTypes.STRING,
      noEmpty: true,
    },
    time: {
      type: DataTypes.STRING,
      noEmpty: true,
    }
  }

  appointmentOps = {
    tableName: 'appointments',
    timestamps: true,

  }

  const Appointment = sequelize.define('Appointment', appointmentSchema, appointmentOps);

  Appointment.associate = (db) => {
    db.Appointment.belongsTo(db.Client);
    db.Appointment.belongsTo(db.Branch);
    db.Appointment.belongsTo(db.Service);
    db.Appointment.belongsTo(db.Employee);
  }
  return Appointment;
}