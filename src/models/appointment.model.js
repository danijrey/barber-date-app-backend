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

  const Apponintment = sequelize.define('Apponintment', appointmentSchema, appointmentOps);

  return Apponintment;
}