import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="bg-gray-800 py-4 shadow-md">
      <h1 className="text-center text-3xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;