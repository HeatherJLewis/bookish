const express = require("express");
const { databaseConnection } = require("./databaseConnection");
const { Book } = require("./book");
const router = require("./routes");

const app = express();
const PORT = 3000;

app.use("/allBooks", router)

app.get("/", (request, response) => {
    response.send("Welcome to our library!")
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });