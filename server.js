const express = require("express");
const books = require("./routers/books");
const user = require("./routers/user");
const session = require("./routers/session");


const app = express();
const PORT = 3000;

app.use('/', session)
app.use('/books', books)
app.use('/user', user)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });