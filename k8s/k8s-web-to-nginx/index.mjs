import express from 'express';
import fetch from 'node-fetch'
import os from 'os'

const app = express();
const PORT = 3000;

app.get('/',(req,resp)=>{
      const hello = `Nginx Hello from Deepak by pod ip  ${os.hostname()}`;
      console.log(hello);
      resp.send(hello);
})

app.get('/nginx',async(req,resp)=>{
      const url = 'http://nginx';
      const response = await fetch(url);
      const body = await response.text();
      resp.send(body);
})

app.listen(PORT,()=>{
      console.log(`Server Running on Port ${PORT}`)
})                           
