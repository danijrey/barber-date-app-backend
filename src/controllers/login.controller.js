const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Client } = require('../db.js');

module.exports = {
  async login(req, res) {
    try {
      const data = req.body;
      console.dir(req.body)

      const user = await Client.findOne({ where: { clientEmail: data.clientEmail }});

      console.dir(user)

      if (!user) {
        throw Error('Correo inválido');
      }
      console.dir(user.clientPassword)
      console.dir(data.clientPassword)

      const isValid = await bcrypt.compareSync( data.clientPassword, user.clientPassword );

      console.dir(isValid)
      if (!isValid) {
        throw Error('Contraseña Inválida');
      }

      const token = jwt.sign(
        { id: user._id },
        'holacarebola',
        { expiresIn: 60 * 60 * 24 * 365 },
      );

      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

