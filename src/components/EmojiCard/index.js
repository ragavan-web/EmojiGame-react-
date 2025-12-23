// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClick = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-btn" onClick={onClick}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
