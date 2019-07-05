import React from 'react'
import Chance from 'chance'
import { render, shallow } from 'enzyme'
import { axe, toHaveNoViolations } from 'jest-axe'
import { GithubIcon } from '../../../../src/components/Icons'

expect.extend(toHaveNoViolations)

describe('GithubIcon', () => {
  it('renders', () => {
    const url = Chance().url()
    const wrapper = shallow(
      <GithubIcon url={url} />
    )
    expect(wrapper.props().href).toEqual(url)
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
