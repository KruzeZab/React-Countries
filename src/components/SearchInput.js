import React from 'react';

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="ui icon input">
      <input
        type="text"
        placeholder="Search Countries..."
        autoFocus
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <i className="search icon" />
    </div>
  );
};

export default SearchInput;
