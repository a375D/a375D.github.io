const express = require('express')
const route = express.Router()
const multiparty = require('connect-multiparty')
const Multi = multiparty()

route.post('/', Multi, (req, res, next) => {
  console.log('i got %s', req.body)
  const src = req.body
  if (src.firstParam && src.secondParam && src.type) {
    const ans = calc(src.firstParam, src.secondParam, src.type)
    console.log(ans)
    if (ans !== undefined) {
      // res.setHeader('Content-Type', 'application/json;charset=utf-8')
      // res.set("Content-Type", 'multipart/form-data'/* "application/json; charset=utf-8" */)
      res.json({ ans: ans })
      return
    }
  }
  next()
})

function calc (first, second, op) {
  const options = {
    '"ADD"': '+',
    '"SUB"': '-',
    '"MUL"': '*',
    '"DIV"': '/'
  }
  const left = Number(first)
  const right = Number(second)
  switch (options[op]) {
    case '+':
      return left + right
    case '-':
      return left - right
    case '*':
      return left * right
    case '/':
      return Math.floor(left / right)
    default:
      return undefined
  }
}

module.exports = route
