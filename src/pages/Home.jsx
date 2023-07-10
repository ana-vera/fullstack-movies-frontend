import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
import { MovieContext } from '../context/MovieContext.jsx'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [movies, setMovies] = useState([])
  const { setSelectedMovie } = useContext(MovieContext)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:5000/api/movies/')
      .then((res) => {
        setMovies(res.data)
      })
      .catch((err) => { console.log(err) })
  }, [])

  const handleMovieClick = (movie) => {
    console.log(movie)
    setSelectedMovie(movie)
    navigate('/details')
  }

  return (
    <div className='grid grid-cols-4 gap-10 mt-4'>
      {movies.map(movie => (
        <div key={movie.id} className='cursor-pointer relative' onClick={() => handleMovieClick(movie)}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <BsFillHeartFill className='absolute top-2 left-2' />
        </div>
      ))}
    </div>
  )
}

export default Home
