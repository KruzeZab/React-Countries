import React, { useState } from 'react';
import CountryList from './CountryList';
import Header from './Header';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="ui container">
        <CountryList searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default App;
