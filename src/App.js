import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './context/authContext/AuthContext';
import { Home, Login, Products, Register } from './pages';
import Account from './pages/dashboard/Account';
import Complain from './pages/dashboard/Complain';
import Dashboard from './pages/dashboard/Dashboard';
import Orders from './pages/dashboard/Orders';
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
          <Route path='/dashboard/complain' element={<Complain />} />
          <Route path='/dashboard/account' element={<Account />} />
          <Route path='/dashboard/orders' element={<Orders />} />
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