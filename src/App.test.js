import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const imgPresent = <img className="App-logo" alt="logo" />;
  expect(wrapper.contains(imgPresent))
});
