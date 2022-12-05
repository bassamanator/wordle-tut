import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(4);

	return (
		<div className='mx-auto w-96'>
			<h1 className={' text-6xl'}>Reacdle</h1>
			<h2>count IS: {count}</h2>

			<button onClick={() => setCount((p) => p + 1)}>increment</button>
		</div>
	);
}

export default App;
