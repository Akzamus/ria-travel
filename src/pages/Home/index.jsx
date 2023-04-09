import Advantage from '../../components/Advantage';
import Carousel from '../../components/Carousel';
import ContactForm from '../../components/ContactForm';
import SocialNetworks from '../../components/SocialNetworks';
import styles from './Home.module.scss'

const slides = [
	{ url: 'https://images.unsplash.com/photo-1489516408517-0c0a15662682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', title: "Дубаи" },
	{ url: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', title: "Америка" },
	{ url: 'https://images.unsplash.com/photo-1614505241498-80a3ec936595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1211&q=80', title: "Мальдивы" },
	{ url: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80', title: "Франция" },
	{ url: 'https://images.unsplash.com/photo-1533656338503-b22f63e96cd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80', title: "Италия" },
];

const advantages = [
	{
		icon: 'bi bi-geo-alt',
		title: 'Удобство и комфорт путешествий',
		text: 'Мы предоставляем услуги по бронированию авиабилетов, железнодорожных билетов, оформлению виз и страховок, организации трансферов и экскурсий по всему миру.'
	},
	{
		icon: 'bi bi-clock-history',
		title: 'Круглосуточная поддержка',
		text: 'Мы гарантируем нашим клиентам 24/7 поддержку менеджера для решения любых возможных вопросов.'
	},
	{
		icon: 'bi bi-person-lines-fill',
		title: 'Индивидуальный подход',
		text: 'Мы учитываем пожелания каждого клиента и предоставляем индивидуальную консультацию для выбора наиболее подходящего тура.'
	},
	{
		icon: 'bi bi-cash-stack',
		title: 'Бюджетные туры',
		text: 'Мы подбираем туры на любой бюджет, чтобы каждый клиент мог насладиться путешествием по максимуму.'
	},
	{
		icon: 'bi bi-check2-circle',
		title: 'Качество услуг',
		text: 'Мы тщательно отбираем туры и предлагаем только лучшие продукты на рынке туристических услуг.'
	},
	{
		icon: 'bi bi-heart',
		title: 'Любовь к нашим клиентам',
		text: 'Мы искренне уважаем и ценим каждого нашего клиента и делаем все возможное, чтобы сделать их путешествие незабываемым и приятным.'
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

function Home() {
	return (
		<>
			<div className={styles.companyBanner} style={{ backgroundImage: 'url(/img/bannerBackground.jpg)' }}>
				<h2>RIA TRAVEL</h2>
				<p>
					RIA TRAVEL – турагентство с 10 летним стажем и полным циклом сопровождения каждого туриста!
					Сервис компании предусматривает поддержку менеджера 24 часа в сутки 7 дней в неделю.
				</p>
				<SocialNetworks list={socialNetworks}/>
			</div >

			<h2 className='heading'>Почему выбирают нас</h2>
			<div className={styles.advantages}>
				{
					advantages.map(
						(advantage, index) => 
							<Advantage
								key={index}
								icon={advantage.icon}
								title={advantage.title}
								text={advantage.text}
							/>
					)
				}
			</div>

      <h2 className='heading'>Популярны места</h2>
      <div className={styles.carouselContainer}>
        <Carousel slides={slides} />
      </div>

			<ContactForm />
		</>
	);
}

export default Home;