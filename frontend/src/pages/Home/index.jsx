import AdvantageCard from '../../components/AdvantageCard';
import Carousel from '../../components/Carousel';
import ContactForm from '../../components/ContactForm';
import Links from '../../components/Links';
import styles from './Home.module.scss'
import React from "react";
import axios from "axios";

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

function Home({links}) {
    const [slides, setSlides] = React.useState([]);
    React.useEffect(() => {
		axios.get('http://localhost:8000/api/v1/popular-places/')
			.then(response => {
				setSlides(response.data);
			})
			.catch(error => {
				alert('Не удалось получить слайды');
			});
	}, []);

    return (
        <>
            <div className={styles.companyBanner} style={{backgroundImage: 'url(/img/bannerBackground.jpg)'}}>
                <h2>RIA TRAVEL</h2>
                <p>
                    RIA TRAVEL – турагентство с 10 летним стажем и полным циклом сопровождения каждого туриста!
                    Сервис компании предусматривает поддержку менеджера 24 часа в сутки 7 дней в неделю.
                </p>
                <Links list={links}/>
            </div>

            <h2 className='heading'>Почему выбирают нас</h2>
            <div className={styles.advantages}>
                {
                    advantages.map(
                        (advantage, index) =>
                            <AdvantageCard
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
                <Carousel slides={slides}/>
            </div>

            <ContactForm/>
        </>
    );
}

export default Home;