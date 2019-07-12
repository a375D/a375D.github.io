const express = require('express');
const router = express.Router();
const multipart = require('connect-multiparty');
const Multi = multipart();
var data = new Map();

router.post('/', Multi, (req, res, next) => {
  //console.log('enter success' + req.body);
  if (req.body) {
    let src = req.body;
    //console.log(src['name'], src['key']);
    data.set(src['name'], src['key']);
    res.status(200).end();
//    return;
  }
  next();
});

router.get('/', (req, res, next) => {
  let src = req.query;
  if (src) {
    let ans = data.get(src.name);
    console.log(src.name, ans);
    if (ans) {
      res.send({key: ans});
      return;
    }
  }
  next();
});

router.delete('/', (req, res, next) => {
  let src = req.query;
  if (src) {
    if (data.delete(src.name)) {
      res.send('success');
      return;
    }
  }
  next();
})

module.exports = router;
