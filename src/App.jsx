import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NowPlaying from './pages/NowPlaying'
import MovieDetails from './pages/MovieDetails'
import SearchMovie from './pages/SearchMovie'
import Genere from './pages/Genere'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="dark text-foreground bg-background">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/nowplaying' element={<NowPlaying/>}/>
        <Route path='/search' element={<SearchMovie/>}/>
        <Route path='/genere' element={<Genere/>}/>
        <Route path='/movie/:movieId' element={<MovieDetails/>}/>
      </Routes>
    </main>
  )
}

export default App
