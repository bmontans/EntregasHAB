require("dotenv").config();
const express = require("express");
const port = process.env.PORT;

const os = require("os");
const operation = (os.freemem() * 100) / os.totalmem();
console.log(operation);

const app = express();

app.use((req, res) => {
  res.send(`La memoria libre del sistema es ${operation}%`);
});

app.use((error, req, res) => {
  res.status(500).send("No funciona correctamente");
});

app.listen(port, () => {
  console.log("Servidor funciona correctamente");
});
