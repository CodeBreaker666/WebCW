//Read CUP information
//
// const os = require('os');
//
// const cpus = os.cpus();
//
// console.log(cpus.length);

//Read storage Info
// const total = os.totalmem();//bytes
//
// console.log(total/1024/1024/1024); //GB
//
// const free = os.freemem();//bytes
//
// console.log(free/1024/1024/1024); //GB

//Web Server
//ajax-->api-->web server(node.js)
const http = require('http');

const server = http.createServer((req, res)=>{
    res.end('hello')
})

server.listen(3000,'127.0.0.1', ()=>{
    console.log('Server success actived')
})

