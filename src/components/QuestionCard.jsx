import { useState } from 'react';

function QuestionCard({
	question,
	options,
	answer,
	updateScore,
	updateCurrentQuestion,
}) {
	const [result, setResult] = useState(null);
	const [isDisabled, setIsDisabled] = useState(false); // State to track if buttons are disabled

	// optionIndex is used to get the index of button to apply feedback styling
	function handleClick(e) {
		const selectedAnswer = e.target.value;
		if (selectedAnswer === answer) {
			updateScore();
			setResult(true);
		} else {
			setResult(false);
		}

		// Disable buttons when an answer is selected
		setIsDisabled(true);

		// Wait for 2 seconds before moving to the next question
		setTimeout(() => {
			updateCurrentQuestion(); // Move to the next question
			setResult(null); // Clear the result message
			setIsDisabled(false); // Re-enable buttons after 2 seconds
		}, 2000); // 2-second delay
	}

	return (
		<div className="question-container">
			<h3>{question}</h3>
			<div className="button-container">
				{options.map((option, index) => (
					<button
						key={index}
						value={option}
						onClick={handleClick}
						disabled={isDisabled}
					>
						{option}
					</button>
				))}
			</div>
			<div>
				{result === true && <span style={{ color: 'green' }}>Correct</span>}
				{result === false && <span style={{ color: 'red' }}>Incorrect</span>}

				{/* {result === true && 'Correct'}
				{result === false && 'Incorrect'} */}
			</div>
		</div>
	);
}

export default QuestionCard;
