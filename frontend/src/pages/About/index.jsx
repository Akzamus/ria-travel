import EmployeeCard from '../../components/EmployeeCard';
import styles from './About.module.scss';
import React from "react";
import axios from "axios";

function About() {
    const [employees, setEmployees] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:8000/api/v1/employees/')
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <>
            <div className={styles.companyDescription}>
                <h2>RIA TRAVEL – турагентство с полным циклом сопровождения каждого туриста!</h2>
                <p>Сервис компании предусматривает поддержку менеджера 24 часа в сутки 7 дней в неделю. Бронирование
                    путевок онлайн, полная консультация по интересующему туру и подбор аналогичных вариантов на выбор!
                    Индивидуальный подход к каждому клиенту означает, что Вам доступны все виды туристических услуг:
                    приобретение авиа и железнодорожных билетов по всем направлениям на регулярные и чартерные рейсы,
                    оформление виз и страхового полиса, а также организация трансфера и экскурсии в любой точке мира. Мы
                    подберем туры учитывая все Ваши пожелания и на любой бюджет. Воспользоваться услугами и сервисом RIA
                    TRAVEL можно из любой точки мира. В наши задачи входит организация Вашего путешествия со 100%
                    обеспечением комфортного и интересного отдыха. Мы тщательно отбираем туры и предлагаем только лучшие
                    продукты. Нам доверяют постоянные клиенты на протяжении 10 лет.</p>
            </div>
            <h2 className='heading'>Наши сотрудники</h2>
            <div className={styles.employeeCards}>
                {
                    employees.map(
                        employee => (
                            <EmployeeCard
                                key={employee.id}
                                photo={employee.photo}
                                name={employee.name}
                                experience={employee.experience}
                            />
                        )
                    )
                }
            </div>
            <h2 className='heading'>Расположение офиса</h2>
            <h4 className={styles.location}>г. Алматы, ул. Байзакова 303, офис 108</h4>
            <a href='https://yandex.kz/maps/162/almaty/?ll=76.915365%2C43.230274&mode=usermaps&source=constructorLink&um=constructor%3A64beb2d8562b1f5e8f31c5c2aaa6f5e15adecea9ce7616c95867d65a38b6782a&z=18'>
                <div
                    className={styles.mapBox}
                    style={{backgroundImage: 'url(/img/map.jpg)'}}
                >
                </div>
            </a>
        </>
    );
}

export default About;