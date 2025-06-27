import React from 'react';
import { Link } from 'react-router-dom';
import { FilmIcon } from '@heroicons/react/24/solid';

function Header() {
  return (
    <header className="bg-gray-800 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <Link 
          to="/" 
          className="flex items-center justify-center gap-3 text-white transition-opacity hover:opacity-80"
        >
          {/* Ícone de rolo de filme, estilizado com Tailwind */}
          <FilmIcon className="h-8 w-8 text-red-500" />

          {/* Título do site estilizado */}
          <h1 className="text-3xl font-bold tracking-wider">
            Cine<span className="font-light">Flix</span>
          </h1>
        </Link>
      </nav>
    </header>
  );
}

export default Header;