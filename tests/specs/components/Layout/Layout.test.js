import React from 'react'
import { shallow } from 'enzyme'
import Layout from '../../../../src/components/Layout'

describe('Layout', () => {
  it('renders children passed in', () => {
    const wrapper = shallow(
      <Layout>
        <div className="unique" />
      </Layout>
    )
    expect(wrapper.contains(<div className="unique" />)).toBe(true)
  })
})
