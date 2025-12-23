import './index.css'

const WinOrLoseCard = props => {
  const {score, totalScore, onPlayAgain} = props
  const isWon = score === totalScore

  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const statusText = isWon ? 'You Won' : 'You Lose'

  return (
    <div className="result-card">
      <div className="result-text">
        <h1>{statusText}</h1>

      
        {isWon && <p>Best Score</p>}

      
        {!isWon && <p>Score</p>}

        <p className="score-text">
          {score}/{totalScore}
        </p>

        <button
          type="button"
          className="play-again-btn"
          onClick={onPlayAgain}
        >
          Play Again
        </button>
      </div>

      <img
        src={imageUrl}
        alt="win or lose"
        className="result-img"
      />
    </div>
  )
}

export default WinOrLoseCard
