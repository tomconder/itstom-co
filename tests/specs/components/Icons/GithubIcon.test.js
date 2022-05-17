import React from 'react'
import Chance from 'chance'
import { render, shallow } from 'enzyme'
import { axe, toHaveNoViolations } from 'jest-axe'
import { GithubIcon } from '../../../../src/components/Icons'

expect.extend(toHaveNoViolations)

describe('GithubIcon', () => {
  it('renders', () => {
    const wrapper = shallow(
      <GithubIcon />
    )
    expect(wrapper.exists()).toEqual(true)
  })

  it('a11y', async () => {
    const url = Chance().url()
    const wrapper = render(
      <GithubIcon url={url} />,
    )

    const result = await axe(wrapper.html())

    expect(result).toHaveNoViolations()
  })
})
