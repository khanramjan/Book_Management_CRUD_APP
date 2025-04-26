import { booksSlice } from "../features/books/BooksSlice";
import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        books:booksSlice.reducer
    }
});
export default store;