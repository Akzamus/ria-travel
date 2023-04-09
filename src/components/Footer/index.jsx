import React from "react";
import styles from './Footer.module.scss';
import SocialNetworks from "../SocialNetworks";

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
	}
];

function Footer({ phones }) {
  return (
    <footer>
			<h4 className={ styles.address }>г. Алматы, ул. Байзакова 303, офис 108</h4>
			<div className={styles.box}>
			<div className={ styles.phoneNumbers }>
        <h3>Номера телефонов</h3>
        <ul>
					{
						phones.map(
							phone =>
							<li key={ phone.id }>
								<a href={`tel:${phone.number}`}>
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