import React, { Fragment } from 'react';


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

export default ErrorDisplayComponent
