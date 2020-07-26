const { getSanitisedListOfBooks } = require("./getSanitisedListOfBooks");

const getAllBooksQueryStringForAuthor = 'SELECT * FROM books WHERE author=${author}'

const getAllBooksForAGivenAuthor = (request, response, next) => {
    const namedParameters = {
        author: request.query.author,
    };
    getSanitisedListOfBooks(response, getAllBooksQueryStringForAuthor, namedParameters)
}

module.exports = {
    getAllBooksForAGivenAuthor
}