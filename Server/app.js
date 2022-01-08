
const express = require('express');
const cors = require('cors');
const itemController = require('./itemController')
const server = express();

server.use(cors());
server.use(express.json());

server.use("/api/items", itemController ); 


server.listen(3000, ()=> console.log('server running on http://localhost:3000'))
