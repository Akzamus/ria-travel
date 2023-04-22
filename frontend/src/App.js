import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import News from './pages/News';
import Post from './pages/Post';
import Error from './pages/Error';
import Reviews from './pages/Reviews';
import {ErrorsContext} from './errorsContext';
import React from 'react';
import axios from "axios";

function App() {
	const [phones, setPhones] = React.useState([]);
	const [links, setLinks] = React.useState([]);
	const [posts, setPosts] = React.useState([]);
	const [hasServerError, setHasServerError] = React.useState(false);

	React.useEffect(() => {
		axios.get('http://localhost:8000/api/v1/phones/')
			.then(response => {
				setPhones(response.data);
			})
			.catch(error => {
				setHasServerError(true);
			});

		axios.get('http://localhost:8000/api/v1/links/')
			.then(response => {
				setLinks(response.data);
			})
			.catch(error => {
				setHasServerError(true);
			});

		axios.get('http://localhost:8000/api/v1/posts/')
			.then(response => {
				setPosts(response.data);
			})
			.catch(error => {
				setHasServerError(true);
			});
	}, []);

	return (
		<ErrorsContext.Provider value={{hasServerError, setHasServerError}}>
			<div className='wrapper'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home links={links} />} />
					<Route path='/about' element={<About />} />
					<Route path='/news' element={<News posts={posts} />} />
					<Route path='/news/:id' element={<Post/>} />
					<Route path='/reviews' element={<Reviews />} />
					<Route path='*' element={<Error code={404} text={'Страница не найдена'} />} />
				</Routes>
				<Footer phones={phones} links={links} />
			</div>
		</ErrorsContext.Provider>
	);
}

export default App;
