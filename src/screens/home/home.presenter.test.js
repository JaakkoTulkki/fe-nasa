import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import React from 'react'

import Home from './home.presenter'

configure({ adapter: new Adapter() })

test('Home renders', () => {
  const wrapper = shallow(<Home />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
