import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const [post, setPost] = useState({
    email: '',
    password: ''
  })
  const handleInput = event => {
    setPost({ ...post, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Frontend: ${post.email} ${post.password}`)
    axios.post('http://localhost:5000/api/users/login', post)
      .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <>
      <div className='container mx-auto m-10 p-10 bg-gray-200'>
        <h1 className='text-sz-xl'>Please enter your information to login</h1>
        <form className='grid grid-cols-1 gap-2' onSubmit={handleSubmit} action=''>
          <label className='' htmlFor=''>E-mail</label>
          <input
            type='email'
            name='email'
            placeholder='name@example.com'
            onChange={handleInput}
          />
          <label className='' htmlFor=''>Password</label>
          <input
            type='password'
            name='password'
            placeholder='password'
            onChange={handleInput}
          />
          <button className='bg-blue-500 text-white p-2 rounded-full'>Submit</button>
        </form>
      </div>
    </>
  )
}
export default Login
