import {
  Home,
  Dashboard,
  Login,
  Register,
  MovieDetails
} from '@/pages'
import { Routes, Route } from 'react-router-dom'

const RouterIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/details' element={<MovieDetails />} />
    </Routes>
  )
}
export default RouterIndex
