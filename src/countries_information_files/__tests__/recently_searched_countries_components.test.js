import React from 'react';
import { shallow } from 'enzyme';
import RecentlySearchedCountriesComponent from './../recently_searched_countries_components'

const defaultProps = {
  Spain: {flag: "https://restcountries.eu/data/esp.svg", name: "Spain", capital: "Madrid", population: 46438422, timezones: []},
}

describe('ErrorDisplayComponent', () => {
  it('when a list item is clicked the function is called', () => {
    const clickFn = jest.fn();
    const wrapper = shallow(<RecentlySearchedCountriesComponent
      recentlySearched={defaultProps}
    getRecentCountryInfo={clickFn} />);

    wrapper.find('li').first().simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });

});
