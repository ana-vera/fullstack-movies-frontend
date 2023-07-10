import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import FavContextProvider from './context/FavoriteContext.jsx'
import { IconContext } from 'react-icons'
import { MovieContextProvider } from './context/MovieContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavContextProvider>
        <MovieContextProvider>
          <IconContext.Provider value={{ className: 'react-icons' }}>
            <App />
          </IconContext.Provider>
        </MovieContextProvider>
      </FavContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
