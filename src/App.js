import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import News from './pages/News';
import Post from './pages/Post';
import React from 'react';

const phones = [
	{
		id: 1,
		number: '+7 (903) 123-45-67',
	},
	{
		id: 2,
		number: '+7 (903) 123-45-67',
	},
	{
		id: 3,
		number: '+7 (903) 123-45-67',
	}
];

const socialNetworks = [
	{
		id: 1,
		url: 'https://api.whatsapp.com/send?phone=77788719777',
		icon: 'bi bi-whatsapp'
	},
	{
		id: 2,
		url: 'https://instagram.com/ria.travel_kz?igshid=YmMyMTA2M2Y=',
		icon: 'bi bi-instagram'
	},
	{
		id: 3,
		url: 'https://t.me/riatrv',
		icon: 'bi bi-telegram'
	},
	{
		id: 4,
		url: 'tel:+7 778 871 9777',
		icon: 'bi bi-telephone-fill'
	},
	{
		id: 5,
		url: 'https://yandex.kz/maps/162/almaty/?ll=76.915365%2C43.230274&mode=usermaps&source=constructorLink&um=constructor%3A64beb2d8562b1f5e8f31c5c2aaa6f5e15adecea9ce7616c95867d65a38b6782a&z=18',
		icon: 'bi bi-geo-alt-fill'
	},
];

const posts = [
	{
		id: 1,
		title: "Заголовок поста 1",
		image: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
		textInPreview: "Текст для предпросмотра 1",
		textInDetails: "Текст для полной версии 1"
	},
	{
		id: 2,
		title: "Заголовок поста 2",
		image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
		textInPreview: "Текст для предпросмотра 2 Текст для предпросмотра 2 Текст для предпросмотра 2 Текст для предпросмотра 2 Текст для предпросмотра 2 Текст для предпросмотра 2 Текст для предпросмотра 2 Текст для предпросмотра 2",
		textInDetails: "Текст для полной версии 2"
	},
	{
		id: 3,
		title: "Заголовок поста 3",
		image: "https://images.unsplash.com/photo-1551866442-64e75e911c23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
		textInPreview: "Текст для предпросмотра 3",
		textInDetails: "Текст для полной версии 3"
	},
	{
		id: 4,
		title: "Заголовок поста 4",
		image: "https://images.unsplash.com/photo-1566232392379-afd9298e6a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhbmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
		textInPreview: "Текст для предпросмотра 4",
		textInDetails: "Текст для полной версии 4"
	},
	{
		id: 5,
		title: "Заголовок поста 5",
		image: "https://images.unsplash.com/photo-1606922183036-62e19495eaab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW4lMjBwbGFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
		textInPreview: "Текст для предпросмотра 5",
		textInDetails: "Текст для полной версии 5"
	},
	{
		id: 6,
		title: "Заголовок поста 6",
		image: "https://images.unsplash.com/photo-1676917349790-adde3abfbde5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGphcGFuJTIwcGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
		textInPreview: "Текст для предпросмотра 6",
		textInDetails: "Текст для полной версии 6"
	}
];

function App() {
	return (
		<div className='wrapper'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home socialNetworks={socialNetworks} />} />
				<Route path='/about' element={<About />} />
				<Route path='/news' element={<News posts={posts} />} />
				<Route path='/news/:id' element={<Post posts={posts} />} />
			</Routes>
			<Footer phones={phones} socialNetworks={socialNetworks} />
		</div>
	);
}

export default App;
