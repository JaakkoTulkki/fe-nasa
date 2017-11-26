import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react'
import { mount } from 'enzyme'
import Home from './home.container'

import { getRequest } from "../../utils";
jest.mock('../../utils')

test('getRequest() gets called with correct url when the submit button is called.', () => {
  const wrapper = mount(<Home />)

  wrapper.find('[name="q"]').at(0).simulate('change', {target: { value: 'one two'}})
  wrapper.find('[name="image"]').at(0).simulate('change', {target: {checked: true}})
  wrapper.find('[type="submit"]').at(0).simulate('click')

  expect(getRequest).toHaveBeenCalledWith('https://images-api.nasa.gov/search?q=one two&media_type=image')
})
