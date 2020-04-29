const express = require('express');

const userRouter = require('./router/user_router');

//Create express intance
const app =express();

function demo_middleware(err,req, res, next){
    //1.Error
    //2.app function, give the administration--next
    //3.response-end response
}

//middleware for load static
app.use(express.static('static',{
    extensions:['html','htm']
}))

app.use('/user', userRouter)

app.get('/index', function(req, res){
     res.sendFile(path.join(static + '/index.html'));
})

app.listen(3000,()=>{
  console.log('server successfully created!')
})

// function valid_name_middleware(req, res, next){
//     let{name} = req.query;
//     if(!name || !name.length){
//         res.json({
//             message: 'Need name param'
//         })
//     }else{
//          next();
//     }
// }
// //1.
// app.all('*', valid_name_middleware)
//
// //2.
// app.get('/test', (req, res)=>{
//     res.json({
//         message:'test'
//     })
// })




// app.use((req,res)=>{
//   res.json({
//       name:"app123"
//   })
// })

//By post/put/delete/update
// app.get('/name/:age', (req,res)=>{
//   let {age} = req.params;
//   res.json({
//       name:'tom',
//       age
//   })
// })
//
// app.post('/name', (req, res)=>{
//   res.send('tom post')
// })
//
// //By URI
// app.get('/user/byname', (req,res)=>{
//     let name = req.query;
//     res.json({
//         name
//     })
// })
//
// app.get('/user/byid', (req,res)=>{
//     let name = req.query;
//     res.json({
//         id
//     })
// })



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