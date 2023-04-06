import CompanyBanner from "./components/CompanyBanner";
import Navbar from "./components/Navbar";

import './index.scss';

function App() {
	return (
		<div className="wrapper">
			<Navbar />
			<CompanyBanner />
			<div className="empty"></div>
		</div>
	);
}

export default App;
