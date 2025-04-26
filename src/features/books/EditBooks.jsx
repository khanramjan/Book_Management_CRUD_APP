import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { editBook } from './BooksSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 

const EditBooks = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);
    const [price, setPrice] = useState(location.state.price);


    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedBook = {
            id: location.state.id,
            title,
            author,
            price
        };
        dispatch(editBook(updatedBook));
        navigate('/show-books');

    };

    return (
        <div className="flex  bg-gray-100 ">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full pb-100 mb-200"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Edit Book</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Price</label>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Update Book
                </button>
            </form>
        </div>
    );
};

export default EditBooks;
