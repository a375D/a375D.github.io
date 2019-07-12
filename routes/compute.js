const express = require('express')
const router = express.Router()
const multiparty = require('connect-multiparty')
const Multi = multiparty()

router.post('/', Multi, (req, res, next) => {
  // console.log('i got %s', req.body)
  const src = req.body
  if (src.firstParam && src.secondParam && src.type) {
    const ans = calc(src.firstParam, src.secondParam, src.type)
    if (ans !== undefined) {
      // res.setHeader('Content-Type', 'application/json;charset=utf-8')
      // res.set("Content-Type", 'application/json')
      res.status(200).json({ ans: ans })
      // console.log('success')
      return
    }
  }
  // console.log("next here")
  next()
})

function calc (first, second, op) {
  const options = {
    ADD: '+',
    SUB: '-',
    MUL: '*',
    DIV: '/'
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

module.exports = router
