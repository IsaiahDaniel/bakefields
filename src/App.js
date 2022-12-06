import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './context/authContext/AuthContext';
import { Home, Login, Products, Register } from './pages';
import Dashboard from './pages/dashboard/Dashboard';
import Product from './pages/Products/Product';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login  />} />
          <Route path='/dashboard' element={<Dashboard  />} />
          <Route path='/register' element={<Register />} />
          <Route path='/products' element={<Products  />} />
          <Route path='/product/:id' element={<Product  />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default App;