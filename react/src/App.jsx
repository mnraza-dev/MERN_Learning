import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Header from './components/Header';
import { useContext } from 'react';
import { DataContext } from './context/UserContext';

function App() {
  const data = useContext(DataContext);

  return (
    <>
      {/* <Header /> */}
      <h1>  This is App
      </h1>

      <h2>{data}</h2>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </>
  )
}

export default App
