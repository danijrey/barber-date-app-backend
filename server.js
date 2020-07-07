require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) =>{
  res.send('Hello Dni')
});

app.listen(port, ()=>
  console.log(`Server listening on http://localhost:${port}`)
);