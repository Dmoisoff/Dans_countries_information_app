import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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
           onClick={() => props.getRecentCountryInfo(country.name)}
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
      <h4 style={{marginBottom: '5px'}}>
        Recently Searched
      </h4>
      <p style={{ marginTop: '0'}}>
        Click on the list item below to see the data again
      </p>
      {displayRecentlySearchedCountries(props.recentlySearched)}
    </ul>
  );
};

RecentlySearchedCountriesComponent.propsTypes = {
  recentlySearched: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flag: PropTypes.string,
  }),
  getRecentCountryInfo: PropTypes.func.isRequired,
}

RecentlySearchedCountriesComponent.defaultProps = {
  recentlySearched: {
    flag: '',
  },
}

export default RecentlySearchedCountriesComponent;
