import styles from './CompanyBanner.module.scss';

function CompanyBanner() {
	return (
		<div className={styles.companyBanner} style={{ backgroundImage: `url(/img/background.jpg)` }}>
			<h2>RIA TRAVEL</h2>
			<p>
				RIA TRAVEL – турагентство с 10 летним стажем и полным циклом сопровождения каждого туриста!
				Сервис компании предусматривает поддержку менеджера 24 часа в сутки 7 дней в неделю.
			</p>
			<div className={styles.socialIcons}>
				<a href="https://api.whatsapp.com/send?phone=+7 778 871 9777"><i className="bi bi-whatsapp"></i></a>
				<a href="https://instagram.com/ria.travel_kz?igshid=YmMyMTA2M2Y="><i className="bi bi-instagram"></i></a>
				<a href="https://t.me/riatrv"><i className="bi bi-telegram"></i></a>
				<a href="tel:+7 778 871 9777"><i className="bi bi-telephone-fill"></i></a>
			</div>
		</div>
	);
}

export default CompanyBanner;