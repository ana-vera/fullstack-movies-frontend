import { createContext, useState } from 'react'

const FavContext = createContext(null)

const FavContextProvider = (props) => {
  const [favorites, setFavorites] = useState([])

  const addToFavorites = (id) => {}

  const removeFromFavorites = (id) => {}

  const values = {
    addToFavorites,
    removeFromFavorites,
    setFavorites,
    favorites
  }

  return (
    <FavContext.Provider value={values} {...props} />
  )
}

export default FavContextProvider
