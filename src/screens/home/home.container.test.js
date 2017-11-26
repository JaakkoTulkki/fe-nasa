import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

import Home from './home.container'
import { getRequest } from '../../utils'

configure({ adapter: new Adapter() })


jest.mock('../../utils')

test('getRequest() gets called with correct url when the submit button is called.', () => {
  const wrapper = mount(<Home />)

  wrapper.find('[name="q"]').at(0).simulate('change', { target: { value: 'one two' } })
  wrapper.find('[name="image"]').at(0).simulate('change', { target: { checked: true } })
  wrapper.find('[type="submit"]').at(0).simulate('click')

  expect(getRequest).toHaveBeenCalledWith('https://images-api.nasa.gov/search?q=one two&media_type=image')
})
