/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    score: 0,
    topScore: 0,
    isGameOver: false,
  }

  shuffleEmojis = emojisList => emojisList.sort(() => Math.random() - 0.5)

  onClickEmoji = id => {
    const {clickedEmojisList, score, topScore} = this.state
    const {emojisList} = this.props

    if (clickedEmojisList.includes(id)) {
      this.setState({
        isGameOver: true,
        topScore: Math.max(score, topScore),
      })
      return
    }

    const updatedClickedList = [...clickedEmojisList, id]
    const updatedScore = score + 1

    if (updatedClickedList.length === emojisList.length) {
      this.setState({
        clickedEmojisList: updatedClickedList,
        score: updatedScore,
        topScore: Math.max(updatedScore, topScore),
        isGameOver: true,
      })
    } else {
      this.setState({
        clickedEmojisList: updatedClickedList,
        score: updatedScore,
      })
    }
  }

  onPlayAgain = () => {
    this.setState({
      clickedEmojisList: [],
      score: 0,
      isGameOver: false,
    })
  }

  renderGameView = () => {
    const {emojisList} = this.props
    const shuffledList = this.shuffleEmojis(emojisList)

    return (
      <ul className="emoji-container">
        {shuffledList.map(each => (
          <EmojiCard
            key={each.id}
            emojiDetails={each}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, topScore, isGameOver} = this.state
    const {emojisList} = this.props

    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
        <div className="game-body">
          {isGameOver ? (
            <WinOrLoseCard
              score={score}
              totalScore={emojisList.length}
              onPlayAgain={this.onPlayAgain}
            />
          ) : (
            this.renderGameView()
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
