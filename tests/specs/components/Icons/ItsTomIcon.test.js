import React from 'react'
import Chance from 'chance'
import { shallow } from 'enzyme'
import { ItsTomIcon } from '../../../../src/components/Icons'

describe('ItsTomIcon', () => {
  it('renders', () => {
    const size = Chance().natural({ max: 256 })
    const wrapper = shallow(
      <ItsTomIcon size={size} />
    )
    expect(wrapper.find('svg').props().height).toEqual(size)
    expect(wrapper.find('svg').props().width).toEqual(size)
  })
})
