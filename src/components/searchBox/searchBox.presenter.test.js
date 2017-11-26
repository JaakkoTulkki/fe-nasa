import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import toJson from 'enzyme-to-json'

import SearchBox from './searchBox.presenter'

configure({ adapter: new Adapter() })

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

test('Ticking audio calls cb correctly', () => {
  const cb = jest.fn()
  const wrapper = mount(<SearchBox
    setTick={cb}
  />)

  wrapper.find('[name="audio"]').at(0).simulate('change')
  expect(cb).toHaveBeenCalledWith('audio', expect.objectContaining({ type: 'change' }))
})

test('Ticking image calls cb correctly', () => {
  const cb = jest.fn()
  const wrapper = mount(<SearchBox
    setTick={cb}
  />)

  wrapper.find('[name="image"]').at(0).simulate('change')
  expect(cb).toHaveBeenCalledWith('image', expect.objectContaining({ type: 'change' }))
})

test('clicking submit calls cb correctly', () => {
  const cb = jest.fn()
  const wrapper = mount(<SearchBox
    submit={cb}
  />)

  wrapper.find('[type="submit"]').at(0).simulate('click')
  expect(cb).toHaveBeenCalled()
})

test('entering text to searchbox calls cb correctly', () => {
  const cb = jest.fn()
  const wrapper = mount(<SearchBox
    setValue={cb}
  />)

  wrapper.find('[type="text"]').at(0).simulate('change', { target: { value: 'space man' } })
  expect(cb).toHaveBeenCalledWith(expect.objectContaining({ target: { value: 'space man' } }))
})
