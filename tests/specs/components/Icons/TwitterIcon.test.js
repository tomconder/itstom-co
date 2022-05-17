import React from 'react'
import Chance from 'chance'
import { render, shallow } from 'enzyme'
import { axe, toHaveNoViolations } from 'jest-axe'
import { TwitterIcon } from '../../../../src/components/Icons'

expect.extend(toHaveNoViolations)

describe('TwitterIcon', () => {
  it('renders', () => {
    const url = Chance().url()
    const wrapper = shallow(
      <TwitterIcon url={url} />
    )
    expect(wrapper.exists()).toEqual(true)
  })

  it('a11y', async () => {
    const url = Chance().url()
    const wrapper = render(
      <TwitterIcon url={url} />,
    )

    const result = await axe(wrapper.html())

    expect(result).toHaveNoViolations()
  })
})
