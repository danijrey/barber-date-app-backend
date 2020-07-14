const { Client } = require('../db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { transporter, welcome, verify } = require('../utils/eMail.js')

module.exports = {
  async all(req, res) {
    try{
    const clients = await Client.findAll();
    res.status(200).json(clients );
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async create(req, res) {
    try{
      const data = req.body;
      const password = await bcrypt.hash(data.clientPassword, 8);
      const clients = await Client.create({
        clientName: data.clientName,
        clientLastname: data.clientLastname,
        clientTelephone: data.clientTelephone,
        clientEmail: data.clientEmail,
        password,
      });

      const token = jwt.sign({ id: clients.id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 * 365,
      });

  /*     const mail = {
        from: '"Cheaper Team" <cheapercolombia@aol.com>',
        to: client.clientEmail,
        subject: 'Bienvenido!',
        html: welcome(client.clientName),
      } */
/*       await transporter.sendMail(mail, (err) => {
        console.log(err);
      }) */

      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async show(req, res) {
    try{
    const { id } = req.params;
    const clients = await Client.findByPk(id);
    res.status(200).json(clients );
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async update(req, res) {
    try{
    const { id } = req.params;
    let clients = await Client.findByPk(id);
    clients = await clients .update(req.body);
    res.status(200).json(clients );
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async delete(req, res) {
    try{
    const { id } = req.params;
    const clients = await Client.findByPk(id);
    await clients .destroy();
    res.status(200).json(clients );
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

}