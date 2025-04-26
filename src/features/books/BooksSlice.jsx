import { createSlice } from '@reduxjs/toolkit'
const initialBooks={
    books: [
        { id: 1, title: 'Book One', author: 'Author A', price: 10.99, description: 'Description of Book One' },
        { id: 2, title: 'Book Two', author: 'Author B', price: 12.99, description: 'Description of Book Two' },
        { id: 3, title: 'Book Three', author: 'Author C', price: 15.99, description: 'Description of Book Three' },
    ],
}
export const booksSlice = createSlice({
    name:'books',
    initialState:initialBooks,
    reducers:{
        showBooks:state=>state,
        addBook:(state,action)=>{
            state.books.push(action.payload)
        },
        deleteBook:(state,action)=>{
            state.books=state.books.filter(book=>book.id!==action.payload)
        },
        editBook:(state,action)=>{
            const {id,title,author,price}=action.payload
            const existingBook=state.books.find(book=>book.id===id)
            if(existingBook){
                existingBook.title=title
                existingBook.author=author
                existingBook.price=price
            }
        }
    }
})
export default booksSlice.reducer
export const {showBooks,addBook,deleteBook,editBook}=booksSlice.actions