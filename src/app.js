const express = require('express')

//Create express intance
const app =express();

// app.use((req,res)=>{
//   res.json({
//       name:"app123"
//   })
// })

app.get('/name/:age', (req,res)=>{
  let {age} = req.params;
  res.json({
      name:'tom',
      age
  })
})

app.post('/name', (req, res)=>{
  res.send('tom post')
})

app.listen(3000,()=>{
  console.log('server successfully created!')
})

// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
//
// var DEBUG=require('debug')('http')

// setup nodemon
//1.npm install nodemon -D
//