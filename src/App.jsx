import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Favorites from './pages/Favorites';
import MemeDetails from './pages/MemeDetails';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/meme/:id" element={<MemeDetails />} />
      </Routes>
    </>
  );
}
