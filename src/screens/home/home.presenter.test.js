import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Home from './home.presenter'

test('Home renders', () => {
  const wrapper = shallow(<Home />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
