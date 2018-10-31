import React from 'react'
import { shallow } from 'enzyme'
import { Avatar } from '../../../../src/components/Header'

describe('Avatar', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Avatar />
    )
    expect(wrapper.exists()).toEqual(true)
  })
})