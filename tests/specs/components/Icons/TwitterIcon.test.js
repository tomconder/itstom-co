import React from 'react'
import Chance from 'chance'
import { shallow } from 'enzyme'
import { TwitterIcon } from '../../../../src/components/Icons'

describe('TwitterIcon', () => {
  it('renders', () => {
    const url = Chance().url()
    const wrapper = shallow(
      <TwitterIcon url={url} />
    )
    expect(wrapper.props().href).toEqual(url)
  })
})