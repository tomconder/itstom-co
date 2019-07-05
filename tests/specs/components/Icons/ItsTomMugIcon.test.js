import React from 'react'
import Chance from 'chance'
import { render, shallow } from 'enzyme'
import { axe, toHaveNoViolations } from 'jest-axe'
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

  it('a11y', async () => {
    const size = Chance().natural({ max: 256 })
    const wrapper = render(
      <ItsTomMugIcon size={size} />,
    )

    const result = await axe(wrapper.html())

    expect(result).toHaveNoViolations()
  })
})
