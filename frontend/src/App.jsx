import './css/App.css'
import Home from "./pages/Home.jsx"
import Favorites from './pages/Favorites.jsx'
import NavBar from './components/NavBar.jsx'
import {Routes, Route} from "react-router-dom"
import {MovieProvider} from "./contexts/MovieContext"

function App() {
  const movieNumber = 2

  return (
    <MovieProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
        </Routes>  
      </main>
    </MovieProvider>
  )
  
}

export default App
