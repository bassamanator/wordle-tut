import App from './App';
import { userEvent,render, screen } from './test/test-utils';

describe('Simple working test', () => {
	it('the title is visible', () => {
		render(<App />);
		expect(screen.getByText(/Reacdle/i)).toBeInTheDocument();
	});

	it('should increment count on click', async () => {
		render(<App />);
		userEvent.click(screen.getByRole('button'));
		expect(await screen.findByText(/count is: 5/i)).toBeInTheDocument();
	});

	// it('uses flexbox in app header', async () => {
	// 	render(<App />);
	// 	const element = screen.getByRole('banner');
	// 	expect(element.className).toEqual('App-header');
	// 	expect(getComputedStyle(element).display).toEqual('flex');
	// });
});
