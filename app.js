const express = require("express");
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

const transactionsController = require('./controllers/transcationsController.js')

app.get("/", (req, res) => {
    res.send("Hello, express");
  });
 app.use("/transactions", transactionsController)

 app.get("*", (req, res) => {
  res.status(404).json({error: "sorry no transaction found"})
 })
 module.exports = app