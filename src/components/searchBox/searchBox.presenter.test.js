import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import SearchBox from './searchBox.presenter'

test('SearchBox renders', () => {
  const wrapper = shallow(<SearchBox
    searchTerm="space chicken"
    title="search title"
    errorMessage="something went wrong...."
    image
    audio={false}
  />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
