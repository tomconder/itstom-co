import React from 'react'
import Chance from 'chance'
import { shallow } from 'enzyme'
import { MeepleIcon } from '../../../../src/components/Icons'

describe('MeepleIcon', () => {
  it('renders', () => {
    const size = Chance().natural({ max: 256 })
    const wrapper = shallow(
      <MeepleIcon size={size} />
    )
    expect(wrapper.find('svg').props().height).toEqual(size)
    expect(wrapper.find('svg').props().width).toEqual(size)
  })
})
