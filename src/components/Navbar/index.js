import React from 'react';
import styles from './Navbar.module.scss'

function Navbar() {
	const [isClicked, setIsClicked] = React.useState(false);

	return (
		<>
			<nav>
				<a href="index.html">
					<img width={120} height={80} src="/img/logo.png" alt="Logo"></img>
				</a>

				<div>
					<ul className={`${styles.menu} ${isClicked ? {} : styles.close}`}>
						<li><a href="index.html">Главная</a></li>
						<li><a href="index.html">О компании</a></li>
						<li><a href="index.html">Контакты</a></li>
						<li><a href="index.html">Новости</a></li>
						<li><a href="index.html">Отзывы</a></li>
					</ul>
				</div>

				<div className={styles.mobile}>
					<i onClick={() => setIsClicked(!isClicked)} className={`${styles.bar} ${isClicked ? 'bi bi-x' : 'bi bi-list'}`}></i>
				</div>
			</nav >
		</>
	);
}

export default Navbar;