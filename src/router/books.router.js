const express = require("express");
const {
  addBooks,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("../controllers/books.controller");
const router = express.Router();

router.post("/", addBooks);
router.get("/get-all", getAllBooks);
router.get("/:id", getSingleBook);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
