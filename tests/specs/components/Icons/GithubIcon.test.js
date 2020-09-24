import React from 'react'
import Chance from 'chance'
import { render, shallow } from 'enzyme'
import { axe, toHaveNoViolations } from 'jest-axe'
import checkPropTypes from 'check-prop-types'
import { GithubIcon } from '../../../../src/components/Icons'

expect.extend(toHaveNoViolations)

describe('GithubIcon', () => {
  it('renders', () => {
    const size = Chance().natural({ max: 256 })
    const wrapper = shallow(
      <GithubIcon size={size} />
    )
    expect(wrapper.exists()).toEqual(true)
  })

  it('check url prop type', () => {
    let result = checkPropTypes(GithubIcon.propTypes,
      { size: Chance().natural({ max: 256 }) }, 'props', 'GithubIcon')
    expect(result).toBeUndefined()
    result = checkPropTypes(GithubIcon.propTypes,
      { size: Chance().url() }, 'props', 'GithubIcon')
    expect(result).toEqual(
      'Failed props type: Invalid props `size` of type `string` supplied to `GithubIcon`, expected `number`.'
    )
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
