import React, { useState } from 'react';

const Search = ({ setSearchQuery }) => {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setSearchQuery(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center my-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search movies..."
        className="w-full sm:w-96 px-4 py-2 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
