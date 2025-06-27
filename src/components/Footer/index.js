import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-gray-400">
        <p className="text-sm">
          © {currentYear} React Filmes. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2">
          Este projeto foi desenvolvido por um estudante para fins didáticos.
        </p>
        <p className="text-xs mt-2">
          Dados dos filmes fornecidos por{' '}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            TMDb
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;