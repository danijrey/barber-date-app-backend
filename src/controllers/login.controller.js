const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Client } = require('../db.js');

module.exports = {
  async login(req, res) {
    try {
      const data = req.body;
      let clientId = 0;

      const user = await Client.findOne({ where: { clientEmail: data.clientEmail }});
           
        clientId = user.id;

      if (!user) {
        throw Error('Correo inválido');
      }

      const isValid = await bcrypt.compareSync( data.clientPassword, user.clientPassword );

      if (!isValid) {
        throw Error('Contraseña Inválida');
      }

      const token = jwt.sign(
        { id: user._id },
        'holacarebola',
        { expiresIn: 60 * 60 * 24 * 365 },
      );

      res.status(200).json({ token, clientId });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

