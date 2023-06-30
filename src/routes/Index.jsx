import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {
  Home,
  Login,
  Dashboard,
  Register
} from '@/pages'
import { AuthContext } from '@/context/AuthContext'

const RouterIndex = () => {
  const { isAuth } = useContext(AuthContext)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={isAuth ? <Dashboard /> : <Navigate to='/login' replace />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default RouterIndex
