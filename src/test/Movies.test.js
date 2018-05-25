import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';

import {Movies} from '../components/movies/Movies';

describe('Movies Component', () => {

  let wrapper;
  let submitButton;
  let inputField;
  beforeEach(() => {
    wrapper = mount(<Movies movies={[]} />);
    inputField = wrapper.find('input').first();
    submitButton = wrapper.find('input').last();
  });

  it('checks if <div> exists', () => {
    expect(wrapper.find('div').length).toBe(1);
  });

  it('checks if <h1> exists', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('renders the text of <h1>', () => {
    expect(wrapper.find('h1').text()).toEqual('Movies');
  });

  // it('checks if <p> exists', () => {
  //   expect(wrapper.find('p').length).toBe(1);
  // });
  //
  // it('renders the text of <p>', () => {
  //   expect(wrapper.find('p').text()).toEqual('At vel indoctum consetetur. Inermis accumsan vel cu. Modo meis platonem eu quo, summo definiebas eam eu.');
  // });

  it('checks if <h3> exists', () => {
    expect(wrapper.find('h3').length).toBe(1);
  });

  it('renders the text of <h3>', () => {
    expect(wrapper.find('h3').text()).toEqual('Add Movie');
  });

  it('checks if <input> exists', () => {
    expect(wrapper.find('input').length).toBe(2);
  });

  it('checks the type of the "inputField"', () => {
    expect(inputField.prop('type')).toBe('text');
  });

  it('checks the type of the "submitButton"', () => {
    expect(submitButton.prop('type')).toBe('submit');
  });

  it('checks the text of the "submitButton"', () => {
    expect(submitButton.prop('value')).toBe('Submit');
  });

});
