const { Sequelize } = require('sequelize');



const sequelize = new Sequelize(
  'barberapp',
  'root',
  '',
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: '3306',
  }
);

/* async function testConnection(){
  try{
    await sequelize.authenticate();
    console.log('Connection established successfully');
  }catch (error){
    console.log('Something went wrong!', error);
  }
} */

const db ={
  Sequelize,
  sequelize,
}
db.Client = db.sequelize.import(
  'client',
  require('./models/client.model.js')
);

db.Branch = db.sequelize.import(
  'branch',
  require('./models/branch.model.js')
);

db.Service = db.sequelize.import(
  'service',
  require('./models/service.model.js')
);

db.Employee = db.sequelize.import(
  'employee',
  require('./models/employee.model.js')
);

db.Appointment = db.sequelize.import(
  'appointment',
  require('./models/appointment.model.js')
);

module.exports = db;