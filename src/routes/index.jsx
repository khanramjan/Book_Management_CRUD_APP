import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import BooksView from '../features/books/BooksView'
import AddBooks from '../features/books/AddBooks'
import EditBooks from '../features/books/EditBooks'

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show-books" element={<BooksView/>} />
        <Route path="/add-books" element={<AddBooks/>} />
        <Route path='edit-books' element={<EditBooks/>}/>
        <Route path='*' element={<Error />}/>
      </Routes>
  )
}

export default AppRouter
