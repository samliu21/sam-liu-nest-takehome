import { useEffect, useState } from 'react';
import TopStoryList from './TopStoryList';
import fetch from 'node-fetch';
import './App.css'

function App() {
	const [stories, setStories] = useState([])

	useEffect(() => {
		const getData = async () => {
			const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
			const data = await response.json()

			const fetchedStories = []
			for (let i = 0; i < 10; ++i) {
				const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json`)
				const storyData = await storyResponse.json()
				fetchedStories.push(storyData)
			}
			setStories(fetchedStories)
		}
		getData()
	}, [])
	
	return (
		<div className="app-container">
			<TopStoryList stories={stories} />
		</div>
	);
}

export default App;
