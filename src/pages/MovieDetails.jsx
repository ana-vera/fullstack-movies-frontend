import { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'

const MovieDetails = () => {
  const { selectedMovie } = useContext(MovieContext)
  console.log(selectedMovie)
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} alt={selectedMovie.title} />
      <h1>{selectedMovie.title}</h1>
      <p>{selectedMovie.overview}</p>
    </>
  )
}
export default MovieDetails
