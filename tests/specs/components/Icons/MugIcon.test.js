import React from 'react'
import Chance from 'chance'
import { shallow } from 'enzyme'
import { MugIcon } from '../../../../src/components/Icons'

describe('MugIcon', () => {
  it('renders', () => {
    const size = Chance().natural({ max: 256 })
    const wrapper = shallow(
      <MugIcon size={size} />
    )
    expect(wrapper.find('svg').props().height).toEqual(size)
    expect(wrapper.find('svg').props().width).toEqual(size)
  })
})
