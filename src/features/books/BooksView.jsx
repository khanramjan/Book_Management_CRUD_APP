import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteBook } from './BooksSlice.jsx'
import { useNavigate } from 'react-router-dom'

const BooksView = () => {
  const books = useSelector(state => state.books.books)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteBook(id))
  } 
const navigate = useNavigate()
  return (
    <div>
      <p className='font-bold flex justify-center text-xl mb-4'>List of Books</p>
      <table className="w-full border border-gray-400 border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Title</th>
            <th className="border border-gray-400 px-4 py-2">Author</th>
            <th className="border border-gray-400 px-4 py-2">Price</th>
            <th className="border border-gray-400 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {books.map((book) => (
            <tr key={book.id}>
              <td className="border border-gray-400 px-4 py-2">{book.title}</td>
              <td className="border border-gray-400 px-4 py-2">{book.author}</td>
              <td className="border border-gray-400 px-4 py-2">${book.price}</td>
              <td className="border border-gray-400 px-4 py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2" onClick={()=>navigate('/edit-books',{state:book})}>
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 " onClick={()=>handleDelete(book.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BooksView
