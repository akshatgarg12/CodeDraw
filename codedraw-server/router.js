const express = require('express')
const router = express.Router();
const axios = require('axios');
const path = require('path');
require('dotenv').config()

const postData = (object)=>{
  return new Promise((resolve, reject)=>{
    axios.post("https://api.jdoodle.com/v1/execute",object).then((result)=>{
      resolve(result.data);
    }).catch(e => resolve(e))
  });
}

router.post('/execute',async(req,res)=>{
  const body = req.body;
  const {script, language, stdin} = body;
  const clientId= process.env.CLIENT_ID;
  const clientSecret= process.env.CLIENT_SECRET;
  const versionIndex ="0"; 
  const post = {
    clientId, clientSecret,script, language, stdin,versionIndex
  }
  let data = await postData(post);
  res.send(data);
  
})
router.get('/',function(req, res) {
	res.sendFile(path.join(__dirname, '/client/build/index.html'))});

module.exports = router;