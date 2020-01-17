import React, { Component, Fragment } from 'react';
import {getCountryData} from './countries_information_utils_file'
import ErrorDisplayComponent from './error_display_component'
import RecentlySearchedCountriesComponent from './recently_searched_countries_components'
import DisplayInformationComponent from './display_information_component'
import {ZERO} from './countries_constaints'

class CountryInformationContainer extends Component {
  state = {
    searched : {
      recentlySearched: {},
      result: {}
    },
    textInput: '',
    errorMessages : {
      isCountryNotFound: false,
    },
  }

   handleTextInputChange = (textInput) => {
     this.setState({
       textInput,
       errorMessages: {
         isCountryNotFound: false
       }
     });
   }

   getBasicCountryInformation = (country = null) => {
      getCountryData(country || this.state.textInput)
      .then((res) => {
        if (!res || !res.length) {
          throw new Error();
        }
        this.setState(prevState => {
          return{
            textInput: country || prevState.textInput,
            searched: {
              ...prevState.searched,
              recentlySearched: Object.assign({},
                 prevState.searched.recentlySearched,
                 ...res.map(country => {
                  return {[country.name]: country}
              })),
              result: res[0]
            },
            errorMessages:{
              isCountryNotFound: false
            },
          }
        })
      }
    )
      .catch((err) => {
        this.setState(prevState => {
          return {
            searched : {
              ...prevState.searched,
              result: {}
            },
            errorMessages:{
              isCountryNotFound: true
            },
          }
        })
      })
    }




  render(){
    return(
      <Fragment>
        <p>Enter the name of a country below</p>
        <p>Please enter the full name of the country, otherwise we will not be able to find the place <br/>
      The search is not case sensitive</p>
    <p>ex: United States of America, United Arab Emirates, Russian Federation</p>
        <input
          type='text'
          value={this.state.textInput}
          onChange={(event)=>this.handleTextInputChange(event.target.value)}
          placeholder={'Enter A Country'}
          />
        <button
          onClick={() => this.getBasicCountryInformation() }>
          Search For Country
        </button>
        <ErrorDisplayComponent
          isCountryNotFound={this.state.errorMessages.isCountryNotFound}/>
        {Object.values(this.state.searched.result).length > ZERO && (
            <DisplayInformationComponent
              result={this.state.searched.result} />
          )}
        {Object.values(this.state.searched.recentlySearched).length > ZERO && (
          <RecentlySearchedCountriesComponent
            recentlySearched={this.state.searched.recentlySearched}
            getBasicCountryInformation={this.getBasicCountryInformation} />
        )}

    </Fragment>);
  }
}

export default CountryInformationContainer;
