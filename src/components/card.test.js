import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';


describe('Card', () => {
  test('that it matches an existing carc snapshot', () => {

    const wrapper = shallow( <Card
      text="Some positive message or text"
      emoji="heart_eyes"
      deleteCardCallback={() => {} } />);

    expect(wrapper).toMatchSnapshot();
  });
});
