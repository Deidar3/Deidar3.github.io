import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import PwnablekrBof from './pages/PwnablekrBof';

export default function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pwnablekr-bof" element={<PwnablekrBof />} />
      </Routes>
    </>
  );
}