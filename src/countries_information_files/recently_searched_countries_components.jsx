import React, { Fragment } from 'react';

const RecentlySearchedCountriesComponent = props => {

  const displayRecentlySearchedCountries = (countries) => {
    return(
      <Fragment>
      {Object.values(countries).map(country =>
        <li
          style={{
            cursor: 'pointer',
            listStyleType: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}
           key={country.name}
           onClick={() => props.getBasicCountryInformation(country.name)}
           >
          <p>{country.name}</p>
          <img alt={`${country.name}'s flag is not available'`} style={{width:'50px'}}src={`${country.flag}`}/>
        </li>
      )}
</Fragment>
  )}

  return(
    <ul
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column'
      }}>
      <h4>Recently Searched</h4>
      {displayRecentlySearchedCountries(props.recentlySearched)}
    </ul>
  );
};

export default RecentlySearchedCountriesComponent;
