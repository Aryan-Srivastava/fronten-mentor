import './AddComments.module.css'

const AddComments = (props) => {
  return (
    <>
      <div className="addComment">
        <img className="authorLogo hide" src={props.currentUser} alt='author image' />
        <textarea
          placeholder={props.textarea_placeholder}
          value={props.textarea_value}
          onInput={props.handleTextarea}
        >
          {props.comment}
        </textarea>
        <div className="sendInfo">
          <img className="authorLogo show" src={props.currentUser} alt='author image'/>
          <button onClick={props.handleComment} className="send-btn">
            {props.sendButton}
          </button>
        </div>
      </div>
    </>
  )
}

export default AddComments