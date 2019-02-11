import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../../../src/components/Header'

describe('Header', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Header />
    )
    expect(wrapper.exists()).toEqual(true)
  })
})
