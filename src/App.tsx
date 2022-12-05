import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='mx-auto w-96'>
			<h1 className={'text-lg text-6xl'}>Reacdle</h1>
		</div>
	);
}

export default App;
