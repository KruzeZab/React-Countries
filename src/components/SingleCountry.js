import React from 'react';

const SingleCountry = props => {
  const { Code, CountryName, Currency, Flag, Symbol } = props;

  const renderList = (
    <>
      <div className="item">
        <div className="content">
          <div className="header">Country: {CountryName}</div>
        </div>
      </div>
      <div className="item">
        <div className="content">
          <div className="header">Code: {Code}</div>
        </div>
      </div>
      <div className="item">
        <div className="content">
          <div className="header">Currency: {Currency}</div>
        </div>
      </div>
      <div className="item">
        <div className="content">
          <div className="header">Symbol: {Symbol}</div>
        </div>
      </div>
    </>
  );

  return (
    <div className="four wide column">
      <div className="ui card">
        <div>
          <img
            src={Flag}
            height="150px"
            width="100%"
            alt={CountryName}
          />
        </div>
        <div className="content">
          <div className="ui relaxed divided list">{renderList}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
