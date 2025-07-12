import React from 'react'
import RegisterPage from './pages/RegisterPage'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Register from './Components/Register'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App