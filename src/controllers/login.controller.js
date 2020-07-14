const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Client } = require('../db.js');

module.exports = {
  async login(req, res) {
    try {
      console.dir(req.body)
      const client = await Client.findOne({ clientEmail: req.body.clientEmail });

      if (!client) {
        throw Error('Correo inválido');
      }
      console.dir(client.clientPassword)
      const isValid = await bcrypt.compare( req.body.clientPassword, client.clientPassword );

      if (!isValid) {
        throw Error('Contraseña Inválida');
      }

      const token = jwt.sign(
        { id: client._id },
        process.env.SECRET,
        { expiresIn: 60 * 60 * 24 * 365 },
      );

      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

