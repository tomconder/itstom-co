import React from 'react'
import { render, shallow } from 'enzyme'
import { axe, toHaveNoViolations } from 'jest-axe'
import Footer from '../../../../src/components/Footer'

expect.extend(toHaveNoViolations)

describe('Footer', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Footer />
    )
    expect(wrapper.exists()).toEqual(true)
  })

  it('a11y', async () => {
    const wrapper = render(
      <Footer />,
    )

    const result = await axe(wrapper.html())

    expect(result).toHaveNoViolations()
  })
})
