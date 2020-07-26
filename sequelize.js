const { Books, Users, CopiesOfBooks } = require('./services/models')

Books.findAll({
    where: {title : 'Boy'}
})
    .then(books => {
        console.log(books);

    })
    .catch(error => console.log(error))



// Users.findAll()
//     .then(books => {
//         console.log(books);

//     })
//     .catch(error => console.log(error))

// CopiesOfBooks.findAll()
//     .then(books => {
//         console.log(books);

//     })
//     .catch(error => console.log(error))


