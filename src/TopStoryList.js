import "./TopStoryList.css"
import TopStory from "./TopStory"

export default function TopStoryList({ stories }) {
	return (
		<div>
			<p className="title">Hacker News</p>
			{stories.map((story, index) => <TopStory key={story.id} story={story} index={index} /> )}
		</div>
	)
}