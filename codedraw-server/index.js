const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',require('./router'))

app.use(express.static('client/build'));

const port = process.env.PORT || 3000;
app.listen(port,()=>{
  console.log("Server started at "+ port);
});