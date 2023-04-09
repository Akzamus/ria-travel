import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import './index.scss';

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

function App() {
	return (
		<div className="wrapper">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer phones={phones} />
		</div>
	);
}

export default App;
