import styles from './Advantages.module.scss';
import Advantage from '../Advantage';

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
]

function Advantages() {
	return (
		<>
			<h2 className={styles.advantagesHeading}>Почему выбирают нас</h2>
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
		</>
	);
}

export default Advantages;