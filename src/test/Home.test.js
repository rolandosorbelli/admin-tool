import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';

import Home from '../components/home/Home';

const wrapper = shallow(<Home name="home" />);

describe('Home Component', () => {
  it('checks if <h1> exists', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('renders the text of <h1>', () => {
    expect(wrapper.find('h1').text()).toEqual('Movie Tool');
  });

  it('checks if <p> exists', () => {
    expect(wrapper.find('p').length).toBe(1);
  });

  it('renders the text of the first <p>', () => {
    expect(wrapper.find('p').text()).toEqual('Lorem ipsum dolor sit amet, eam saperet utroque sensibus te.');
  });
});
