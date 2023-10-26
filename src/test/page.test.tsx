import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

test('renders the home page', () => {
  render(<Home />)
  const headingElement = screen.getByText(/Home/i)
  expect(headingElement).toBeInTheDocument()
})
