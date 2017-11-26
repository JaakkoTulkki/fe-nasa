import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

import Pagination from './index'

configure({ adapter: new Adapter() })

test('Pagination renders', () => {
  const wrapper = shallow(<Pagination />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

test('Clicing the buttons calls the callback', () => {
  const callBack = jest.fn()
  const links = [{ rel: 'prev', href: 'http://example.com/prev' }, { rel: 'next', href: 'http://example.com/next' }]
  const wrapper = mount(<Pagination callBack={callBack} links={links} />)

  wrapper.find('a').at(0).simulate('click')
  expect(callBack).toHaveBeenCalledWith('http://example.com/prev')
  wrapper.find('a').at(1).simulate('click')
  expect(callBack).toHaveBeenCalledWith('http://example.com/next')
})
