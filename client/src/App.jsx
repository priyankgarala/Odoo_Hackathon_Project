import React from 'react'
import RegisterPage from './pages/RegisterPage'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Register from './Components/Register'
import ItemDesc from './pages/ItemDesc'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/item" element={<ItemDesc />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App