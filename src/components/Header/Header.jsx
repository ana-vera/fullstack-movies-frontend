import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex justify-between bg-yellow-800 text-2xl text-white p-4'>
      <Link to='/'>LOGO</Link>
      <div className='flex justify-between'>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/'>Logout</Link>
      </div>
    </nav>
  )
}
export default Header
