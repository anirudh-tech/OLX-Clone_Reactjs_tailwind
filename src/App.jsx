import { useContext, useState } from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom'
import Signup from './Pages/Signup';
import  AuthProvider,{AuthContext}  from './context/AuthContext'
import Login from './Pages/Login';
import AddProduct from './Pages/AddProduct';

function App() {
  const user = useContext(AuthContext)
  const navigate = useNavigate();
  return (
    <>
      <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        {
          user && user.name ? ( 
            <Route path="/add-product" element={<AddProduct/>} />
        ) : (<Route path='/add-product' element={< Navigate to="/"/>}/>)
        }
      </Routes>
      </AuthProvider>
    </>
  )
}

export default App
