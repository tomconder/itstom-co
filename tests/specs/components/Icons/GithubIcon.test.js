import React from 'react'
import Chance from 'chance'
import { shallow } from 'enzyme'
import { GithubIcon } from '../../../../src/components/Icons'

describe('GithubIcon', () => {
  it('renders', () => {
    const url = Chance().url()
    const wrapper = shallow(
      <GithubIcon url={url} />
    )
    expect(wrapper.props().href).toEqual(url)
  })
})
