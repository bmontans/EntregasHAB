require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT;

const date = new Date();
const hour = date.getHours();

app.get("/", (req, res) => {
  if (hour < 12 && hour > 5) {
    res.send("Hola holita vecinito");
  } else {
    res.send("Nada nadita por aquí");
  }
});
app.use((error, req, res) => {
  res.status(404).send("No funciona");
});

app.listen(port, () => {
  console.log("Servidor web funcionando correctamente");
});
