import React from 'react'
import { render, shallow } from 'enzyme'
import { axe, toHaveNoViolations } from 'jest-axe'
import { HelmetProvider } from 'react-helmet-async'
import Layout from '../../../../src/components/Layout'

expect.extend(toHaveNoViolations)

describe('Layout', () => {
  it('renders children passed in', () => {
    const wrapper = shallow(
      <Layout>
        <div className="unique" />
      </Layout>
    )
    expect(wrapper.contains(<div className="unique" />)).toBe(true)
  })

  it('a11y', async () => {
    const wrapper = render(
      <HelmetProvider>
        <Layout>
          <nav title="ally-test" className="unique" />
        </Layout>
      </HelmetProvider>
    )

    const result = await axe(wrapper.html())

    expect(result).toHaveNoViolations()
  })
})
