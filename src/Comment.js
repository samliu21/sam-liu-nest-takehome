import fetch from 'node-fetch';
import { useEffect, useState } from 'react';
import './Comment.css'

export default function Comment({ commentId }) {
	const [comment, setComment] = useState(null)

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`)
			const data = await response.json()
			setComment(data)
		}
		getData()
	}, [])

	if (comment) {
		return (
			<div>
				<h4>By {comment.by}</h4>
				{comment.text}
				<div className="subchildren">
					{(comment.kids || []).map((comment, index) => <Comment key={index} commentId={comment} />)}
				</div>
			</div>
		)
	} else {
		return ""
	}
}