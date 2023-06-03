import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';

import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Pokespera from "./views/empty";

function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokespera />} />
          <Route path="/pokemones/:name" element={<Pokemones />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
