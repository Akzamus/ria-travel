import {Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import News from './pages/News';
import Post from './pages/Post';
import Reviews from './pages/Reviews';
import Info from "./pages/Info";
import {AppContext} from './appContext';
import React from 'react';
import axios from "axios";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const api = axios.create({
	baseURL: 'http://localhost:8000/api/v1'
});

function App() {
	const [phones, setPhones] = React.useState([]);
	const [links, setLinks] = React.useState([]);
	const [posts, setPosts] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [hasServerError, setHasServerError] = React.useState(false);

	React.useEffect(() => {
		api.get('/phones/')
			.then(response => {
				setPhones(response.data);
			})
			.catch(error => {
				if (!error.response || error.response.status !== 404) {
					setHasServerError(true);
				}
			});

		api.get('/links/')
			.then(response => {
				setLinks(response.data);
			})
			.catch(error => {
				if (!error.response || error.response.status !== 404) {
					setHasServerError(true);
				}
			});

		api.get('/posts/')
			.then(response => {
				setPosts(response.data);
				setLoading(false);
			})
			.catch(error => {
				if (!error.response || error.response.status !== 404) {
					setHasServerError(true);
				}
				setLoading(false);
			});
	}, []);

	return (
		<AppContext.Provider value={{hasServerError, setHasServerError, api}}>
			<div className='wrapper'>
				<Navbar/>
				<Routes>
					<Route path='/' element={<Home links={links}/>}/>
					<Route path='/about' element={<About/>}/>
					<Route path='/news' element={<News posts={posts} loading={loading}/>}/>
					<Route path='/news/:id' element={<Post/>}/>
					<Route path='/reviews' element={<Reviews/>}/>
					<Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
					<Route path='*' element={<Info code={404} text={'Страница не найдена'}/>}/>
				</Routes>
				<Footer phones={phones} links={links}/>
			</div>
		</AppContext.Provider>
	);
}

export default App;
