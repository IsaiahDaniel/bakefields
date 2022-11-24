import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import Footer from './components/Footer/Footer';
import { Home, Login, Products, Register } from './pages';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login  />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Products  />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;