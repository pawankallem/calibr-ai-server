require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connect = require("./config/db");
const booksRoute = require("./router/books.router");

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(cors());

app.use("/books", booksRoute);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Server listening to PORT ${PORT}`);
  } catch (error) {
    console.log("error: ", error);
  }
});
