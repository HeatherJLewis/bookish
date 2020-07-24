const express = require("express");
const books = require("./routers/books");
const user = require("./routers/user");
const session = require("./routers/session");
const bodyParser = require('body-parser');
const {configurePassport} = require("./middleware/configurePassport")
const passport = require('passport');

configurePassport()

const app = express();
const PORT = 3000;

app.use(passport.initialize())
app.use(bodyParser.json())
app.use('/', session)
app.use('/books', books)
app.use('/user', user)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });