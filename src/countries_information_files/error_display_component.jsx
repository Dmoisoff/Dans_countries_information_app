import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const ErrorDisplayComponent = props => {
  return(
    <Fragment>
      {props.isCountryNotFound &&
        <strong
          style={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection:'column'}}>
          <p>Country not found</p>
        </strong>
      }
    </Fragment>
  );

};

ErrorDisplayComponent.propsTypes = {
  isCountryNotFound: PropTypes.bool.isRequired
}

export default ErrorDisplayComponent
