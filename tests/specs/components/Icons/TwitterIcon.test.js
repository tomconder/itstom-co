import React from 'react'
import Chance from 'chance'
import { render, shallow } from 'enzyme'
import { axe, toHaveNoViolations } from 'jest-axe'
import checkPropTypes from 'check-prop-types'
import { TwitterIcon } from '../../../../src/components/Icons'

expect.extend(toHaveNoViolations)

describe('TwitterIcon', () => {
  it('renders', () => {
    const size = Chance().natural({ max: 256 })
    const wrapper = shallow(
      <TwitterIcon size={size} />
    )
    expect(wrapper.exists()).toEqual(true)
  })

  it('check url prop type', () => {
    let result = checkPropTypes(TwitterIcon.propTypes,
      { size: Chance().natural({ max: 256 }) }, 'props', 'GithubIcon')
    expect(result).toBeUndefined()
    result = checkPropTypes(TwitterIcon.propTypes,
      { size: Chance().url() }, 'props', 'TwitterIcon')
    expect(result).toEqual(
      'Failed props type: Invalid props `size` of type `string` supplied to `TwitterIcon`, expected `number`.'
    )
  })

  it('a11y', async () => {
    const wrapper = render(
      <TwitterIcon />,
    )

    const result = await axe(wrapper.html())

    expect(result).toHaveNoViolations()
  })
})
