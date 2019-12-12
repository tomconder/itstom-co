import React from 'react'
import Chance from 'chance'
import { render, shallow } from 'enzyme'
import { axe, toHaveNoViolations } from 'jest-axe'
import checkPropTypes from 'check-prop-types'
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

  it('renders default url', () => {
    const wrapper = shallow(
      <GithubIcon />
    )
    expect(wrapper.props().href).toEqual('')
  })

  it('check url prop type', () => {
    let result = checkPropTypes(GithubIcon.propTypes,
      { url: Chance().url() }, 'props', 'GithubIcon')
    expect(result).toBeUndefined()
    result = checkPropTypes(GithubIcon.propTypes,
      { url: Chance().natural({ max: 256 }) }, 'props', 'GithubIcon')
    expect(result).toEqual(
      'Failed props type: Invalid props `url` of type `number` supplied to `GithubIcon`, expected `string`.'
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
