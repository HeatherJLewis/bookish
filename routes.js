const express = require('express')
const { getAllBooks } = require('./middleware/getAllBooks');

const router = express.Router()

router.get('/', getAllBooks)

module.exports = router;