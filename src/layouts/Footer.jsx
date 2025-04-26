import React from 'react'

const footer = () => {
return (
    <footer className="bg-gray-800 text-white py-2 mt-20 flex fixed bottom-0 w-full">
        <div className="container mx-auto text-center">
            <p>&copy; 2023 Bookstore. All rights reserved.</p>
            <p>Follow us on social media:</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="text-white hover:text-gray-400">Facebook</a>
                <a href="#" className="text-white hover:text-gray-400">Twitter</a>
                <a href="#" className="text-white hover:text-gray-400">Instagram</a>
            </div>
        </div>
    </footer>
)
}

export default footer
