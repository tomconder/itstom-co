import React from 'react'
import { render, shallow } from 'enzyme'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Header } from '../../../../src/components/Header'

expect.extend(toHaveNoViolations)

describe('Header', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Header />
    )
    expect(wrapper.exists()).toEqual(true)
  })

  it('a11y', async () => {
    const wrapper = render(
      <Header />,
    )

    const result = await axe(wrapper.html())

    expect(result).toHaveNoViolations()
  })
})
