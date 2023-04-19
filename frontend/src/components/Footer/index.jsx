import React from "react";
import styles from './Footer.module.scss';
import Links from "../Links";

function Footer({phones, links}) {
    return (
        <footer>
            <h4 className={styles.address}>г. Алматы, ул. Байзакова 303, офис 108</h4>
            <div className={styles.box}>
                <div className={styles.phoneNumbers}>
                    <h3>Номера телефонов</h3>
                    <ul>
                        {
                            phones.map(
                                phone =>
                                    <li key={phone.id}>
                                        <a href={`tel:${phone.number}`}>
                                            <i className="bi bi-telephone"></i>
                                            {phone.number}
                                        </a>
                                    </li>
                            )
                        }
                    </ul>
                </div>
                <div className={styles.linksMedia }>
                    <h3>Нас можно найти в:</h3>
                    <Links list={links}/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;