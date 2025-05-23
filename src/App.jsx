import React from 'react'
import AppRouter from './routes'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRouter />
      <Footer/>
    </div>
  )
}

export default App
