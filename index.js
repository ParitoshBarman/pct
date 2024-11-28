require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express");

mongoose.connect("mongodb://127.0.0.1:27017/user-roles-perm")
const port = process.env.SERVER_PORT || 3000

const app = express();

app.use(express.static("public"));




app.listen(port, (req, res)=>{
    console.log("Server is listening on", port);
})