import React from 'react';

function CategoryFilter({ genres, selectedGenre, onSelectGenre }) {
  const baseButtonClass = "px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none";
  const activeButtonClass = "bg-blue-600 text-white";
  const inactiveButtonClass = "bg-gray-700 text-gray-300 hover:bg-gray-600";

  return (
    <div className="flex flex-wrap justify-center gap-2 my-8 px-4">
      <button
        onClick={() => onSelectGenre(null)}
        className={`${baseButtonClass} ${!selectedGenre ? activeButtonClass : inactiveButtonClass}`}
      >
        Populares
      </button>
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => onSelectGenre(genre.id)}
          className={`${baseButtonClass} ${selectedGenre === genre.id ? activeButtonClass : inactiveButtonClass}`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;