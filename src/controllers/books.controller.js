const Book = require("../models/book.model");

const addBooks = async (req, res) => {
  try {
    const { title, author, publicationYear, isbn, description } = req.body;
    const newBook = new Book({
      title,
      author,
      publicationYear,
      isbn,
      description,
    });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.log("error: ", error);
  }
};
const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find().lean().exec();
    res.status(200).json(allBooks);
  } catch (error) {
    console.log("error: ", error);
  }
};

const getSingleBook = async (req, res) => {
  try {
    res.json(req.body);
  } catch (error) {
    console.log("error: ", error);
  }
};

const updateBook = async (req, res) => {
  try {
    res.json(req.body);
  } catch (error) {
    console.log("error: ", error);
  }
};

const deleteBook = async (req, res) => {
  try {
    res.json(req.body);
  } catch (error) {
    console.log("error: ", error);
  }
};

module.exports = {
  addBooks,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
