CREATE TABLE books (
bookId SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
author VARCHAR(255),
isbn VARCHAR(255),
barcode VARCHAR(255)
);

CREATE TABLE users (
userId SERIAL PRIMARY KEY,
firstName VARCHAR(255) NOT NULL,
surname VARCHAR(255),
username VARCHAR(255),
userPassword VARCHAR(255)
);

CREATE TABLE copiesOfBooks (
copyId SERIAL PRIMARY KEY,
bookId INT REFERENCES books(bookId),
userId INT REFERENCES users(userId),
dateOfReturn DATE NOT NULL DEFAULT CURRENT_DATE,
);


INSERT INTO books(title, author)
VALUES
('The BFG', 'Roald Dahl'),
('The Witches', 'Roald Dahl'),
('Boy', 'Roald Dahl');

INSERT INTO users(firstName, surname, username, userPassword)
VALUES
('Heather', 'Lewis', 'HeatherJL', 'hedgehog'),
('Hannah', 'Lewis', 'HannahSpanner', 'badgers'),
('Evie', 'Lewis', 'EvieWevie', 'pangolin'),
('Matt', 'Lewis', 'MattTL', 'cats');
