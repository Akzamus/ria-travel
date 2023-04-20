import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import News from './pages/News';
import Post from './pages/Post';
import React from 'react';
import NotFound from './pages/NotFound';
import Reviews from './pages/Reviews';
import axios from "axios";

function App() {
	const [phones, setPhones] = React.useState([]);
	const [links, setLinks] = React.useState([]);
	const [posts, setPosts] = React.useState([]);

	React.useEffect(() => {
		axios.get('http://localhost:8000/api/v1/phones/')
			.then(response => {
				setPhones(response.data);
			})
			.catch(error => {
				alert('Не удалось получить номера телефонов');
			});
		axios.get('http://localhost:8000/api/v1/links/')
			.then(response => {
				setLinks(response.data);
			})
			.catch(error => {
				alert('Не удалось получить ссылки');
			});
		axios.get('http://localhost:8000/api/v1/posts/')
			.then(response => {
				setPosts(response.data);
			})
			.catch(error => {
				alert('Не удалось получить посты');
			});
	}, []);

	return (
		<div className='wrapper'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home links={links} />} />
				<Route path='/about' element={<About />} />
				<Route path='/news' element={<News posts={posts} />} />
				<Route path='/news/:id' element={<Post/>} />
				<Route path='/reviews' element={<Reviews />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer phones={phones} links={links} />
		</div>
	);
}

export default App;
