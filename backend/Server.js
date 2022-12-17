const express = require("express");
const mysql = require("mysql");
const port = 4000;
// const cors = require("cors");
const server = express();

//middleware
// server.use(
//   cors({
//     origin: ["http://localhost:3000"],
//   })
// );
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get("/authlogin", (req, res) => {
  console.log(req.query);
  const userName = req.query.username;
  const password = req.query.pass;
  const SELECT = `SELECT * FROM Account where user_name=${userName}`;
  // connect mysql
  // query SELECT from mysql
  // resFromDB.pass === password ? { resFromDB } : {valid : false}


  //! get the usename & pass from req
  //! check database for the truth
  //!  r - if true  response the user object valid true
  //!      object valid = false
  console.log("me");
});

server.listen(port, () => {
  console.log("Connected to 4000");
});
