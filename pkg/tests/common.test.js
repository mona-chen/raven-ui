import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { MyCounter } from '../src'

// eslint-disable-next-line no-undef
describe('Common render', () => {
  it('renders without crashing', () => {
    render(<MyCounter />)
  })
})
