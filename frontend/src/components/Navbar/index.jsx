import React from 'react';
import styles from './Navbar.module.scss'
import {Link} from 'react-router-dom';

function Navbar() {
    const [isClicked, setIsClicked] = React.useState(false);

    return (
        <>
            <nav>
                <Link to="/">
                    <img width={120} height={80} src="/img/logo.png" alt="Logo"></img>
                </Link>

                <div>
                    <ul className={`${styles.menu} ${isClicked ? {} : styles.close}`}>
                        <li><Link onClick={() => setIsClicked(!isClicked)} to="/">Главная</Link></li>
                        <li><Link onClick={() => setIsClicked(!isClicked)} to="/about">О компании</Link></li>
                        <li><Link onClick={() => setIsClicked(!isClicked)} to="/news">Новости</Link></li>
                        <li><Link onClick={() => setIsClicked(!isClicked)} to="/reviews">Отзывы</Link></li>
                    </ul>
                </div>

                <div className={styles.mobile}>
                    <i
                        onClick={() => setIsClicked(!isClicked)}
                        className={`${styles.bar} ${isClicked ? 'bi bi-x' : 'bi bi-list'}`}
                    ></i>
                </div>
            </nav>
        </>
    );
}

export default Navbar;