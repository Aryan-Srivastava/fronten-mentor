import "./EditComment.module.css";
import iconPlus from "../../assets/images/icon-plus.svg";
import iconMinus from "../../assets/images/icon-minus.svg";
import iconDelete from "../../assets/images/icon-delete.svg";
import iconEdit from "../../assets/images/icon-edit.svg";
import iconReply from "../../assets/images/icon-reply.svg";
import { useState } from "react";

const EditComment = (props) => {
	const [score, setScore] = useState(props.counter);
	const [editText, setEditText] = useState(props.textarea_value);
	function increaseScore() {
		if (score > props.counter) {
			return "";
		}
		return setScore((prevDate) => prevDate + 1);
	}

	function decreaseScore() {
		if (score < props.counter) {
			return "";
		}
		setScore((prevDate) => prevDate - 1);
	}
	return (
		<>
			<div className="comment flex-desktop">
				<div className="commentRate commentRate-column">
					<img alt="" onClick={increaseScore} src={iconPlus} />
					<p>{score}</p>
					<img alt="" onClick={decreaseScore} src={iconMinus} />
				</div>
				<div className="flex-column">
					<div className="userInfo">
						<img alt="" className="userPicture" src={props.image} />
						<p className="userName">{props.username}</p>
						{props.currentUser && <p className="myCard">you</p>}
						<p className="commentDate">{props.createdAt}</p>
						{props.currentUser ? (
							<div className="editComment hide">
								<span onClick={props.handleDelete}>
									<img alt="Delete comment" src={iconDelete} />
									<span className="deleteEditedComment">
										Delete
									</span>
								</span>
								<span onClick={props.handleEdit}>
									<img alt="Edit comment" src={iconEdit} />
									<span className="editComment-edit">
										Edit
									</span>
								</span>
							</div>
						) : (
							<div className="editComment hide">
								<div onClick={props.handleReply}>
									<img alt="Reply to the comment" src={iconReply} />
									<span className="replyEditedComment">
										Reply
									</span>
								</div>
							</div>
						)}
					</div>
					<textarea
						className="editText"
						placeholder={props.textarea_placeholder}
						value={editText}
						onInput={(e) => setEditText(e.target.value)}
					>
						{props.comment}
					</textarea>
					<div className="commentInfo">
						<div className="commentRate show-flex">
							<img
								alt="upvote the comment"
								onClick={increaseScore}
								src={iconPlus}
							/>
							<p>{score}</p>
							<img
								alt="downvote the comment"
								onClick={decreaseScore}
								src={iconMinus}
							/>
						</div>
						<div className="editComment show">
							<span onClick={props.handleDelete}>
								<img alt="delete icon" src={iconDelete} />
								<span className="deleteEditedComment">
									Delete
								</span>
							</span>
							<span onClick={props.handleEdit}>
								<img alt="Edit comment" src={iconEdit} />
								<span className="editComment-edit">Edit</span>
							</span>
						</div>
					</div>
					<button
						className="update-btn"
						onClick={() => props.updateEdit(editText)}
					>
						Update
					</button>
				</div>
			</div>
		</>
	);
};

export default EditComment;
