const express = require("express");
const app = express();
const db = require("./db/db.js");
const router = require("./router");
require("./models/associations");
const cors = require("cors");

const PORT = 7998;

//Cors Middleware
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE,OPTIONS"
  );
  next();
});

//MiddleWares:
app.use(express.json());
//Routes
app.use(router);

//Conection to the dataBase
app.listen(PORT, () => {
  console.log(`Server oppened at port ${PORT}`);

  db.authenticate()
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((error) => {
      console.log("Not connected to the database" + error);
    });
});
