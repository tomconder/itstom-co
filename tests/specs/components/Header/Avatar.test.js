import React from 'react'
import { render, shallow } from 'enzyme'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Avatar } from '../../../../src/components/Header'

expect.extend(toHaveNoViolations)

describe('Avatar', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Avatar />,
    )
    expect(wrapper.exists()).toEqual(true)
  })

  it('a11y', async () => {
    const wrapper = render(
      <nav><Avatar /></nav>
    )

    const result = await axe(wrapper.html())

    expect(result).toHaveNoViolations()
  })
})
