import { useState, createContext } from 'react'

const MovieContext = createContext(null)

function MovieContextProvider (props) {
  const [selectedMovie, setSelectedMovie] = useState({})

  // Estos datos seran publicos para todos los componentes
  const values = {
    selectedMovie,
    setSelectedMovie
  }

  return (
    <MovieContext.Provider value={values} {...props} />
  )
}

// Exportar las funciones del Provider y el contexto
export {
  MovieContextProvider,
  MovieContext
}
