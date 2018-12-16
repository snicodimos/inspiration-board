import React from 'react';
import NewCardForm from './NewCardForm';
import { shallow } from 'enzyme';


describe('NewCardForm', () => {
  test('that it matches an existing snapshot for adding', () => {

    const wrapper = shallow( <NewCardForm addNewCardToCollection={() => {} } />);

    expect(wrapper).toMatchSnapshot();
  });

  test('that it matches an existing snapshot for delete', () => {

    const wrapper = shallow( <NewCardForm deleteCardCallback={() => {} } />);

    expect(wrapper).toMatchSnapshot();
  });

  test('that it matches an existing snapshot for delete', () => {

    const wrapper = shallow( <NewCardForm deleteCardCallback={() => {} } />);

    expect(wrapper).toMatchSnapshot();
  });
});
