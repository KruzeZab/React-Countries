import React from 'react';
import logo from '../images/logo.png';
import SearchInput from './SearchInput';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="ui menu" style={{ marginBottom: '2rem' }}>
      <div className="ui container">
        <a href="/" className="header item">
          <img src={logo} alt="logo" className="ui avatar image" />
          React Countries
        </a>
        <div className="item" style={{ flexGrow: 1 }}>
          <SearchInput
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
