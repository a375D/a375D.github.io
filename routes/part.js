const express = require('express');
const multiparty = require('connect-multiparty');
const route = express.Route();
const Multi = multiparty();

route.post(Multi, (req, res, next) => {
  
  next();
})

module.exports = route;
