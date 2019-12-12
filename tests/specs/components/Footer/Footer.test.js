import React from 'react'
import { mount, render, shallow } from 'enzyme'
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

  it('renders with space before "Built With" links', () => {
    const wrapper = mount(
      <Footer />
    )
    expect(wrapper.text()).toContain('Built with ')
  })

  it('renders with spaces between "Built With" links', () => {
    const wrapper = mount(
      <Footer />
    )
    expect(wrapper.text()).toContain('Gatsby and React')
  })

  it('renders with spaces before "Source Code" link', () => {
    const wrapper = mount(
      <Footer />
    )
    expect(wrapper.text()).toContain('on Github')
  })

  it('a11y', async () => {
    const wrapper = render(
      <Footer />,
    )

    const result = await axe(wrapper.html())

    expect(result).toHaveNoViolations()
  })
})
