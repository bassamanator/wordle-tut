import { getRandomWord } from './word-utils';

import { render, screen, userEvent } from './test/test-utils';

describe('word-utils', () => {
	it('to not be sugar', () => {
		expect(getRandomWord()).not.toBe('sugar');
	});

	it('should be truthy', () => {
		expect(getRandomWord()).toBeTruthy();
	});

	// it('the title is visible', () => {
	// 	render(<App />);
	// 	expect(screen.getByText(/Reacdle/i)).toBeInTheDocument();
	// });

	// it('should increment count on click', async () => {
	// 	render(<App />);
	// 	userEvent.click(screen.getByRole('button'));
	// 	expect(await screen.findByText(/count is: 5/i)).toBeInTheDocument();
	// });

	// it('uses flexbox in app header', async () => {
	// 	render(<App />);
	// 	const element = screen.getByRole('banner');
	// 	expect(element.className).toEqual('App-header');
	// 	expect(getComputedStyle(element).display).toEqual('flex');
	// });
});
