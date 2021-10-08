import React from 'react';
import SingleCountry from './SingleCountry';
import countries from '../data.json';

const CountryList = ({ searchTerm }) => {
  const filterSearch = val => {
    if (searchTerm === '') {
      return val;
    } else if (
      val.CountryName.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    }
  };

  return (
    <>
      <h3 className="ui header">Results:</h3>
      <div className="ui grid">
        {countries.filter(filterSearch).map((country, index) => (
          <SingleCountry {...country} key={country.Code} />
        ))}
      </div>
    </>
  );
};

export default CountryList;
