const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    publicationYear: Number,
    isbn: String,
    description: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
