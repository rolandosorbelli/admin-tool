import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';

import Movies from '../components/movies/Movies';

function setup() {
  const props = {
    movie: {}, errors: {},
    onTitleChange: () => {},
    onClickSave: () => {}
  };
  return shallow(<Movies {...props} />);
}

// describe('Movies Component', () => {
//   it('checks if h1 exists', () => {
//     // const wrapper = setup(false);
//     // expect(wrapper.find('h1').length).toBe(1);
//   });
// });
