require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./src/db.js')
const clientRouter = require('./src/routes/client.js');
const branchRouter = require('./src/routes/branch.js');
const serviceRouter = require('./src/routes/service.js');
const employeeRouter = require('./src/routes/employee.js');
const appointmentRouter = require('./src/routes/appointment.js');




const port = process.env.PORT || 8080;

/* testConnection(); */
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) =>{
  res.send('Hello Dni')
});

app.use('/clients', clientRouter);
app.use('/branchs', branchRouter);
app.use('/branchs/:branchId/services', serviceRouter);
app.use('/branchs/:branchId/employees', employeeRouter);
app.use('/appointments', appointmentRouter);




sequelize.sync();


app.listen(port, ()=>
  console.log(`Server listening on http://localhost:${port}`)
);