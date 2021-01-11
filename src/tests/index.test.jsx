import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../pages/index'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'common:brand.head',
      }),
    ).toBeInTheDocument()
  })
})
