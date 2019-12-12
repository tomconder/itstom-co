import React from 'react'
import Chance from 'chance'
import { render, shallow } from 'enzyme'
import { axe, toHaveNoViolations } from 'jest-axe'
import checkPropTypes from 'check-prop-types'
import { ItsTomMugIcon } from '../../../../src/components/Icons'

expect.extend(toHaveNoViolations)

describe('ItsTomMugIcon', () => {
  it('renders', () => {
    const size = Chance().natural({ max: 256 })
    const wrapper = shallow(
      <ItsTomMugIcon size={size} />
    )
    expect(wrapper.find('svg').props().height).toEqual(size)
    expect(wrapper.find('svg').props().width).toEqual(size)
  })

  it('renders default fill prop', () => {
    const wrapper = shallow(
      <ItsTomMugIcon />
    )
    expect(wrapper.find('path').at(1).prop('fill')).toBe('none')
  })

  it('renders default size prop', () => {
    const wrapper = shallow(
      <ItsTomMugIcon />
    )
    expect(wrapper.find('svg').prop('width')).toBe(64)
    expect(wrapper.find('svg').prop('height')).toBe(64)
  })

  it('check fill prop type', () => {
    let result = checkPropTypes(ItsTomMugIcon.propTypes,
      { fill: Chance().color() }, 'props', 'ItsTomMugIcon')
    expect(result).toBeUndefined()
    result = checkPropTypes(ItsTomMugIcon.propTypes,
      { fill: Chance().natural({ max: 256 }) }, 'props', 'ItsTomMugIcon')
    expect(result).toEqual(
      'Failed props type: Invalid props `fill` of type `number` supplied to `ItsTomMugIcon`, expected `string`.'
    )
  })

  it('check size prop type', () => {
    let result = checkPropTypes(ItsTomMugIcon.propTypes,
      { size: Chance().natural({ max: 256 }) }, 'props', 'ItsTomMugIcon')
    expect(result).toBeUndefined()
    result = checkPropTypes(ItsTomMugIcon.propTypes, { size: Chance().color() },
      'props', 'ItsTomMugIcon')
    expect(result).toEqual(
      'Failed props type: Invalid props `size` of type `string` supplied to `ItsTomMugIcon`, expected `number`.'
    )
  })

  it('a11y', async () => {
    const size = Chance().natural({ max: 256 })
    const wrapper = render(
      <ItsTomMugIcon size={size} />,
    )

    const result = await axe(wrapper.html())

    expect(result).toHaveNoViolations()
  })
})
