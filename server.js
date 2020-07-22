const express = require("express");
const { databaseConnection } = require("./databaseConnection");
const { Book } = require("./book");

const app = express();
const PORT = 3000;

app.get("/", (request, response)=> {
    databaseConnection.any('select * from books', [true])
    .then(data => {
        const listOfBooks = data.map(book => {
            return new Book(book.bookid, book.title, book.author, book.isbn, book.barcode);
        })
        response.send(listOfBooks);
    })
    .catch(error => {
        console.log('ERROR:', error);
    })
    .finally(databaseConnection.$pool.end);
})


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });