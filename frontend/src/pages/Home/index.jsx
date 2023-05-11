import Carousel from '../../components/Carousel';
import ContactForm from '../../components/ContactForm';
import Links from '../../components/Links';
import styles from './Home.module.scss'
import React from "react";
import {AppContext} from "../../appContext";
import Info from "../Info";
import InfoCards from "../../components/InfoCards";

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

const services = [
    {
        icon: 'emoji_emotions',
        title: 'Горящие туры'
    },
    {
        icon: 'public',
        title: 'Туры по всему миру'
    },
    {
        icon: 'flag',
        title: 'Туры в Европу'
    },
    {
        icon: 'credit_card',
        title: 'Туры в рассрочку'
    },
    {
        icon: 'description',
        title: 'Помощь в оформлении визы'
    },
    {
        icon: 'flight',
        title: 'Авиабилеты'
    },
    {
        icon: 'train',
        title: 'Железнодорожные билеты'
    },
    {
        icon: 'hotel',
        title: 'Бронирование отелей'
    },
    {
        icon: 'shuffle',
        title: 'Организация трансфера'
    },
    {
        icon: 'explore',
        title: 'Экскурсии в любой точке мира'
    },
    {
        icon: 'directions_boat',
        title: 'Круизы'
    },
    {
        icon: 'security',
        title: 'Страхование'
    },
    {
        icon: 'person',
        title: 'Индивидуальные туры'
    },
    {
        icon: 'book',
        title: 'Обучение за рубежом'
    },
    {
        icon: 'favorite',
        title: 'Организация свадебных путешествий'
    },
    {
        icon: 'local_hospital',
        title: 'Лечебный туризм'
    }
];

function Home({links}) {
    const [slides, setSlides] = React.useState([]);
    const {hasServerError, setHasServerError, api} = React.useContext(AppContext);

    React.useEffect(() => {
        api.get('/popular-places/')
            .then(response => {
                setSlides(response.data);
            })
            .catch(error => {
                if (!error.response || error.response.status !== 404) {
                    setHasServerError(true);
                }
            });
    }, [setHasServerError, api]);

    if (hasServerError) {
        return <Info
            errorCode={500}
            text={'Возникла ошибка при получении данных с сервера'}
        />
    }

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
            <InfoCards cards={advantages}/>

            <h2 className='heading'>Наши услуги</h2>
            <ul className={styles.services}>
                {
                    services.map(
                        service => (
                            <li key={service.title}>
                                <i className="material-icons">{service.icon}</i>
                                <span>{service.title}</span>
                            </li>
                        )
                    )
                }
            </ul>

            <h2 className='heading'>Популярные места</h2>
            <div className={styles.carouselContainer}>
                <Carousel slides={slides}/>
            </div>

            <ContactForm/>
        </>
    );
}

export default Home;