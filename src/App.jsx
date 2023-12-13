import { useContext, useState } from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Signup from './Pages/Signup';
import  AuthProvider  from './context/AuthContext'
import Login from './Pages/Login';
import AddProduct from './Pages/AddProduct';

function App() {
  const navigate = useNavigate();
  return (
    <>
      <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/add-product" element={<AddProduct/>} />
      </Routes>
      </AuthProvider>
    </>
  )
}

export default App
