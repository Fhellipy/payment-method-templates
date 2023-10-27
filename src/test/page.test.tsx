import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

test('renders the home page', () => {
	render(<Home />);
	const headingElement = screen.getByText(/Home/i);
	expect(headingElement).toBeInTheDocument();
});
