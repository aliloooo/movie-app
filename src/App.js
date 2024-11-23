import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import axios from 'axios';

const API_KEY = '696f91e6'; // API key Anda

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('Avengers'); // Default search

  useEffect(() => {
    fetchMovies(searchQuery);
  }, [searchQuery]);

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header title="AlCineHub" />
      <div className="container mx-auto px-4">
        <Search setSearchQuery={setSearchQuery} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
