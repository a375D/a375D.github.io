const express = require('express');
const route = express.Router();
const multiparty = require('connect-multiparty');
const Multi = multiparty();


route.post('/', Multi, (req, res, next) => {
  console.log('i got %s', req.body);
  let src = req.body;
  if (src.firstParam && src.secondParam && src.type) {
    let ans = {ans:calc(src.firstParam, src.secondParam, src.type)};
    console.log('ok with %s', ans);
    res.send(ans);
    return;
  }
  next();
});

function calc(first, second, op) {
  let options = {
    '"ADD"': '+',
    '"SUB"': '-',
    '"MUL"': '*',
    '"DIV"': '/'
  };
  if (op === '"DIV"') {
    return Math.floor(first / second);
  }
  return eval(first + options[op] + second);
}

module.exports = route;
