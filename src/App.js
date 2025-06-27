import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import MovieDetails from './pages/movieDetails';
import Footer from './components/Footer'; // Importe o novo componente

function App() {
  return (
   
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {}
      
      {}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </main>

      {}
      <Footer />
    </div>
  );
}

export default App;