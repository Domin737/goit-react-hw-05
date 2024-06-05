import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SearchBar, SearchButton, SearchInput } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = e => {
    e.preventDefault();
    navigate(`${location.pathname}?query=${query}`);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <SearchBar onSubmit={handleSearch}>
        <SearchInput
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchBar>
    </div>
  );
};

export default Movies;
