const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Client } = require('../db.js');

module.exports = {
  async signin(req, res) {
    try {
      const { clientId } = req.params;
      const client = await Client.findOne({ clientEmail: req.body.email });

      if (!client) {
        throw Error('Invalid email or password');
      }

      const isValid = await bcrypt.compare(req.body.password, user.password);

      if (!isValid) {
        throw Error('Invalid email or password');
      }

      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET,
        { expiresIn: 60 * 60 * 24 * 365 },
      );

      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

