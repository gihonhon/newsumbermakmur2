import HeroSection from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Plant from "./pages/Plant";
import Animal from "./pages/Animal";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/farm/plant" element={<Plant/>}/>
        <Route path="/farm/animal" element={<Animal/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
