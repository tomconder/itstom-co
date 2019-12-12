import React from 'react'
import Chance from 'chance'
import { render, shallow } from 'enzyme'
import { axe, toHaveNoViolations } from 'jest-axe'
import checkPropTypes from 'check-prop-types'
import { TwitterIcon } from '../../../../src/components/Icons'

expect.extend(toHaveNoViolations)

describe('TwitterIcon', () => {
  it('renders', () => {
    const url = Chance().url()
    const wrapper = shallow(
      <TwitterIcon url={url} />
    )
    expect(wrapper.props().href).toEqual(url)
  })

  it('renders default url', () => {
    const wrapper = shallow(
      <TwitterIcon />
    )
    expect(wrapper.props().href).toEqual('')
  })

  it('check url prop type', () => {
    let result = checkPropTypes(TwitterIcon.propTypes,
      { url: Chance().url() }, 'props', 'TwitterIcon')
    expect(result).toBeUndefined()
    result = checkPropTypes(TwitterIcon.propTypes,
      { url: Chance().natural({ max: 256 }) }, 'props', 'TwitterIcon')
    expect(result).toEqual(
      'Failed props type: Invalid props `url` of type `number` supplied to `TwitterIcon`, expected `string`.'
    )
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
