import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/movies/')
      .then((res) => {
        setMovies(res.data)
      })
      .catch((err) => { console.log(err) })
  }, [])

  const showMovieDetails = () => {

  }

  return (
    <div className='grid grid-cols-4 gap-10 mt-4'>
      {movies.map(movie => (
        <div key={movie.id} className='cursor-pointer' onClick={showMovieDetails}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}
    </div>
  )
}
export default Home
