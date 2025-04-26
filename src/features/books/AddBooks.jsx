import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addBook } from './BooksSlice'
import { useNavigate } from 'react-router-dom'

const AddBooks = () => {
  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const [price, setPrice] = React.useState('')

  const numberOfBooks = useSelector(state => state.books.books.length)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: numberOfBooks + 1, title, author, price }
    dispatch(addBook(book))
    setTitle('')
    setAuthor('')
    setPrice('')
    navigate('/show-books')
  }

return (
    <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-500 text-white">
        </nav>
        <div className="flex items-center justify-center p-5">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Add New Book</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Price</label>
                    <input
                        type="text"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Add Book
                </button>
            </form>
        </div>
    </div>
)
}

export default AddBooks
