import React from "react";
import styles from './Footer.module.scss';
import SocialNetworks from "../SocialNetworks";

function Footer({ phones, socialNetworks }) {
  return (
    <footer>
			<h4 className={ styles.address }>г. Алматы, ул. Байзакова 303, офис 108</h4>
			<div className={ styles.box }>
			<div className={ styles.phoneNumbers }>
        <h3>Номера телефонов</h3>
        <ul>
					{
						phones.map(
							phone =>
							<li key={ phone.id }>
								<a href={`tel:${ phone.number }`}>
									<i className="bi bi-telephone"></i>
									{ phone.number }
								</a>
							</li>
						)
					}
        </ul>
      </div>
      <div className={ styles.socialMedia }>
        <h3>Мы в социальных сетях</h3>
				<SocialNetworks list={ socialNetworks.filter(i => !i.url.includes('tel:')) }/>
      </div>
			</div>
    </footer>
  );
}

export default Footer;