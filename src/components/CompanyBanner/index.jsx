import styles from './CompanyBanner.module.scss';

function CompanyBanner() {
	return (
		<div className={styles.companyBanner} style={{ backgroundImage: `url(/img/bannerBackground.jpg)` }}>
			<h2>RIA TRAVEL</h2>
			<p>
				RIA TRAVEL – турагентство с 10 летним стажем и полным циклом сопровождения каждого туриста!
				Сервис компании предусматривает поддержку менеджера 24 часа в сутки 7 дней в неделю.
			</p>
			<div className={styles.socialIcons}>
				<a href="https://api.whatsapp.com/send?phone=77788719777"><i className="bi bi-whatsapp"></i></a>
				<a href="https://instagram.com/ria.travel_kz?igshid=YmMyMTA2M2Y="><i className="bi bi-instagram"></i></a>
				<a href="https://t.me/riatrv"><i className="bi bi-telegram"></i></a>
				<a href="tel:+7 778 871 9777"><i className="bi bi-telephone-fill"></i></a>
				<a href={
					`https://yandex.kz/maps/162/almaty/?from=mapframe&ll=76.915715%2C43.229850&` +
					`mode=usermaps&source=mapframe&um=constructor%3Ae386e4e457659ee28ffc8b56f7a` +
					`de83340dda7fcc200279b85431e3aaf56be5a&utm_source=mapframe&z=17.6`
				}>
					<i className="bi bi-geo-alt-fill"></i>
				</a>
			</div>
		</div >
	);
}

export default CompanyBanner;