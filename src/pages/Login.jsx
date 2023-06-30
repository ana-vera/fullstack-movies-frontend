import { useContext } from 'react'
import logo from '../assets/react.svg'
import useForm from '../hooks/useForm'
import asyncHandler from 'express-async-handler'
import { loginUser } from '@/services/userServices'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/context/AuthContext'

const Login = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  // mandar los datos al backend
  const sendData = asyncHandler(async (data) => {
    const result = await loginUser(data)
    console.log(result)
    if (result.status === 200) {
      const token = result.data.token
      login(token)
      navigate('/')
    }
  })

  // usar custom hooks
  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' className='logo' height='100px' />
      </div>
      <form action=''>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          placeholder='email@email.com'
          value={input.email}
          onChange={handleInputChange}
        />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          placeholder='email@email.com'
          value={input.password}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Login</button>
      </form>
      Login
    </div>
  )
}
export default Login
