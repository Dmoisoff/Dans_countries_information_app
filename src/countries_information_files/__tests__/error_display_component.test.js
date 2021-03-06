import React from 'react';
import { shallow } from 'enzyme';
import ErrorDisplayComponent from './../error_display_component'

describe('ErrorDisplayComponent', () => {
  it('should display error message if isCountryNotFound is true', () => {
    const wrap = shallow(<ErrorDisplayComponent isCountryNotFound />);

    expect(
      wrap.containsMatchingElement(
        <p>Country not found</p>
      )).toBeTruthy();
      wrap.unmount();
  });

  it('should display error message if isCountryNotFound is false', () => {
    const wrap = shallow(<ErrorDisplayComponent />);

    expect(
      wrap.containsMatchingElement(
        <p>Country not found</p>
      )).toBeFalsy();
      wrap.unmount();
  });
});
