import React from 'react';

const SearchBar = ({ search, setSearch }) => {

  return (
    <>
      <input
        type="text"
        className="search"
        placeholder="Type Here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
      
    </>
  );
};

export default SearchBar;