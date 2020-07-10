const jwt = require('jsonwebtoken');

module.exports = {
  auth(req, res, next) {
    const token = req.headers.authorization;
    console.log(token);

    if (!token) {
      res.status(401).json({ message: 'Tu sesión ha expirado' });
      return;
    }

    req.provider = jwt.verify(token, process.env.SECRET);
    next();
  },
};