import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';

import Navbar from '../components/common/Navbar';

const wrapper = shallow(<Navbar name="navbar" />);

describe('Navbar Component', () => {
  it('checks if <nav> exists', () => {
    expect(wrapper.find('nav').length).toBe(1);
  });

  it('checks if <IndexLink> exists', () => {
    expect(wrapper.find('IndexLink').length).toBe(1);
  });

  it('checks if <Link> exists', () => {
    expect(wrapper.find('Link').length).toBe(1);
  });
});
