import React from 'react'
import { mount, render, shallow } from 'enzyme'
import { axe, toHaveNoViolations } from 'jest-axe'
import { HeadProvider, Title } from 'react-head'
import checkPropTypes from 'check-prop-types'
import Layout from '../../../../src/components/Layout'

expect.extend(toHaveNoViolations)

describe('Layout', () => {
  it('renders children passed in', () => {
    const wrapper = shallow(
      <Layout>
        <div className="unique" />
      </Layout>
    )
    expect(wrapper.contains(<div className="unique" />)).toBe(true)
  })

  it('renders default children prop', () => {
    const wrapper = mount(
      <HeadProvider>
        <Layout />
      </HeadProvider>
    )
    expect(wrapper.find('main').exists()).toEqual(true)
  })

  it('renders title', () => {
    const wrapper = mount(
      <HeadProvider>
        <Layout>
          <div className="unique" />
        </Layout>
      </HeadProvider>
    )
    expect(wrapper.find(Title).text()).toBe("It's Tom")
  })

  it('check children prop type', () => {
    let result = checkPropTypes(Layout.propTypes,
      { children: <div /> }, 'props', 'Layout')
    expect(result).toBeUndefined()
    result = checkPropTypes(Layout.propTypes, { children: () => {} },
      'props', 'Layout')
    expect(result).toEqual(
      'Failed props type: Invalid props `children` supplied to `Layout`, expected a ReactNode.'
    )
  })

  it('a11y', async () => {
    const wrapper = render(
      <HeadProvider>
        <Layout>
          <div className="unique" />
        </Layout>
      </HeadProvider>
    )

    const result = await axe(wrapper.html())

    expect(result).toHaveNoViolations()
  })
})
