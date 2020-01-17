import React, { Fragment } from 'react';
import {getLocalTimes} from './time_zone_helper';
import {ZERO} from './countries_constaints';
import PropTypes from 'prop-types';


const DisplayInformationComponent = props => {
  const country = props.result;
  const informationNotAvailable = 'Information Not Available'

  const displayTimezoneData = (timezones) => {
    return getLocalTimes(timezones).map(localTime => {
      return(
        <li
          key={localTime.localTZ}>
          Timezone: {localTime.localTZ}, Local Time: {localTime.localTime}
        </li>
      )
    })
  }

  return(
    <Fragment>
      <h3>Country Found!</h3>
      <p>Country Name: {country.name ? country.name : informationNotAvailable} </p>
      <p>Country Capital: {country.capital ? country.capital : informationNotAvailable} </p>
      <p>Population Size: {country.population ? country.population : informationNotAvailable} </p>
      <p>Flag<br/> {country.flag ? <img alt={`${country.name}'s flag is not available'`} style={{width:'250px'}} src={`${country.flag}`}/> : informationNotAvailable} </p>
      <p>Current Time By Timezones Located The Country</p>
      {country.timezones.length > ZERO ?
        <Fragment>
          {displayTimezoneData(country.timezones)}
        </Fragment>
        : <p>{informationNotAvailable}</p>}
    </Fragment>
  );

};

DisplayInformationComponent.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string.isRequired,
    capital: PropTypes.string,
    population: PropTypes.number,
    flag: PropTypes.string,
    timezones: PropTypes.array,
  })
}

DisplayInformationComponent.defaultProps = {
  recentlySearched: PropTypes.shape({
    capital: '',
    population: null,
    flag: '',
    timezones: [],
  })
}

export default DisplayInformationComponent
