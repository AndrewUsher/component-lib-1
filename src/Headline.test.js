import React from 'react'
import { cleanup, render } from 'react-testing-library'
import Headline from './Headline'
import 'jest-styled-components'

describe('<Headline />', () => {
  afterEach(cleanup)

  test('Renders level 1 correctly', function level1Test() {
    const { container, getByText } = render(
      <Headline level="1">Hello</Headline>
    )
    expect(getByText('Hello')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
