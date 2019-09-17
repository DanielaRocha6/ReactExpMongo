var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");
/* GET users listing. */
router.get('/', function (req, res) {

  res.send(req.query);
});

router.post('/', (req, res) => {
  res.send(req.body);
});

router.get('/http', (req, res) => {

  // const fetchDummy = new Promise((resolve, reject)=>{
  //   // traiga cosas de la url
  //   if(todobien){
  //     resolve(req);
  //   } else{
  //     reject(eroor);
  //   }
  // });

  fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(reqGato => {
      return reqGato.json();
    })
    .then(data => {
      console.log(data);
      res.send(""+data.length);
    });
});

router.get('/:id', (req, res) => {
  res.send(req.params.id);
});

module.exports = router;
