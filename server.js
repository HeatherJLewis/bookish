const express = require("express");
const router = require("./routes");

const app = express();
const PORT = 3000;

app.use("/books", router)

app.get("/", (request, response) => {
    response.send("Welcome to our library!")
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });