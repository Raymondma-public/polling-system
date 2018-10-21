let express = require('express');
let router = express.Router();
let pollService = require('../services/polls');

/* GET users listing. */
router.get('/', (req, res, next)=> {
  pollService.getAll().then((content)=>{
    res.send(content);
  }).catch((err)=>{
    res.send(err);
  });
});

router.post('/',(req, res, next)=>{
  let pollId=req.body.id;
  let responseOptionLabel=req.body.option;
  console.log("pollId:"+pollId);
  console.log("responseOptionLabel:"+responseOptionLabel);
  res.send({message:"success"});
});

module.exports = router;
