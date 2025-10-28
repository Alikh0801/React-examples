import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import SingleBlog from './pages/SingleBlog'

function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blogs">Blogs</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
        </Routes>
      </div>
    </>
  )
}

export default App
