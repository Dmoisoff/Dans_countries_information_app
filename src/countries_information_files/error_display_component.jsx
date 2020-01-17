import React, { Fragment } from 'react';


const ErrorDisplayComponent = props => {
  return(
    <Fragment>
      {props.isCountryNotFound &&
        <strong>
          <p>Country not found</p>
        </strong>
      }
    </Fragment>
  );

};

export default ErrorDisplayComponent
