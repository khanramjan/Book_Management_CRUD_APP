import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Book Management App</h1>
        <p className="text-gray-700 text-lg mb-6">
          This is a simple Book Management App built with <span className="font-semibold">React</span>, <span className="font-semibold">Redux Toolkit</span>, <span className="font-semibold">React Router DOM</span>, and <span className="font-semibold">TailwindCSS</span>.
        </p>
        <p className="text-gray-600 mb-2">
          📚 You can <span className="font-semibold">Add</span>, <span className="font-semibold">View</span>, <span className="font-semibold">Edit</span>, and <span className="font-semibold">Delete</span> books easily.
        </p>
        <p className="text-gray-600">
          Enjoy a smooth, responsive, and clean experience managing your favorite books!
        </p>
      </div>
    </div>
  );
};

export default Home;
