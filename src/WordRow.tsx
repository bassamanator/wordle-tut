const LETTER_LENGTH = 5;

type WordRowProps = {
	letters: string;
};
export const WordRow = ({ letters: lettersProp = '' }: WordRowProps) => {
	const lettersRemaining = LETTER_LENGTH - lettersProp.length;
	const letters = lettersProp.split('').concat(Array(lettersRemaining).fill(''));
	console.log('letters: ', letters);
	return (
		<div className='grid grid-cols-5 gap-4'>
			{letters.map((char, i) => (
				<CharacterBox key={i} value={char} />
			))}
		</div>
	);
};

type CharacterBoxProps = {
	value: string;
};
const CharacterBox = ({ value }: CharacterBoxProps) => {
	return (
		<div className='text-large  inline-block border-2 border-gray-500 p-4 text-center text-2xl font-bold uppercase'>
			{value}
		</div>
	);
};
