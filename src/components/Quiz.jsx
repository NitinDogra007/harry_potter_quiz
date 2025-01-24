import { useState } from 'react';
import QuestionCard from './QuestionCard';
import harryPotterQuestions from './Questions';

function Quiz() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);

	function restart() {
		setCurrentQuestion(0);
		setScore(0);
	}

	function updateScore() {
		setScore((prevScore) => prevScore + 1);
	}

	function updateCurrentQuestion() {
		setCurrentQuestion((prevIndex) => prevIndex + 1);
	}

	return (
		<div className="quiz-display">
			<header>
				<h1>Harry Potter Quiz</h1>
			</header>

			<div className="quiz-container">
				{currentQuestion < harryPotterQuestions.length && (
					<p>
						Question {currentQuestion + 1} of {harryPotterQuestions.length}
					</p>
				)}
				{currentQuestion < harryPotterQuestions.length ? (
					<QuestionCard
						question={harryPotterQuestions[currentQuestion].question}
						options={harryPotterQuestions[currentQuestion].options}
						answer={harryPotterQuestions[currentQuestion].answer}
						updateScore={updateScore}
						updateCurrentQuestion={updateCurrentQuestion}
					/>
				) : (
					<div className="results">
						<h3>Your final score: {score}/10</h3>
						<button className="restart" onClick={restart}>
							Restart
						</button>
					</div>
				)}
			</div>

			<footer>Made with 💜</footer>
		</div>
	);
}

export default Quiz;
