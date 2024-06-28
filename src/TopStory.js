import { useState } from "react"
import "./TopStory.css"
import moment from "moment"
import Comment from "./Comment"

export default function TopStory({ story, index }) {
	const [shouldShowComments, setShouldShowComments] = useState(false)
	const timeSince = moment(story.time, 'X').fromNow()
	const labelText = `${story.score} points by ${story.by} ${timeSince} | ${story.descendants} comments`

	if (!shouldShowComments) {
		return (
			<div className="container" onClick={() => setShouldShowComments(true)}>
				<h4>{index + 1}</h4>
				<div className="story-container">
					<h4>{story.title}</h4>
					<div>{labelText}</div>
				</div>
			</div>
		)
	}

	const comments = story.kids

	return (
		<div className="comment-container">
			{comments.map((comment) => <Comment commentId={comment} key={comment} />)}
		</div>
	)
}