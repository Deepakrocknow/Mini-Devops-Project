import express from 'express';
import os from 'os'

const app = express();
const PORT = 3000;

app.get('/',(req,resp)=>{
      const hello = `Version-3 Hello from Deepak by pod ip ${os.hostname()}`;
      console.log(hello);
      resp.send(hello);
})

app.listen(PORT,()=>{
      console.log(`Server Running on Port ${PORT}`)
})                           