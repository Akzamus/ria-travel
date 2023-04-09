import EmployeeCard from '../../components/EmployeeCard';
import styles from './About.module.scss';

const employees = [
  {
    id: 1,
    name: 'Бактияркызы Анара',
    experience: 3,
    photo: '/img/workers/Anara.jpg',
  },
  {
    id: 2,
    name: 'Турысбекова Айнур',
    experience: 12,
    photo: '/img/workers/Ainura.jpg',
  },
  {
    id: 3,
    name: 'Ходжаева Жасмин',
    experience: 2,
    photo: '/img/workers/Jasmine.jpg',
  },
	{
    id: 4,
    name: 'Дуйсенбаев Тамирлан',
    experience: 20,
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
  }
];

function About() {
	return (
		<>
			<div className={styles.companyDescription}>
				<h2>RIA TRAVEL – турагентство с полным циклом сопровождения каждого туриста!</h2>
				<p>Сервис компании предусматривает поддержку менеджера 24 часа в сутки 7 дней в неделю. Бронирование путевок онлайн, полная консультация по интересующему туру и подбор аналогичных вариантов на выбор! Индивидуальный подход к каждому клиенту означает, что Вам доступны все виды туристических услуг: приобретение авиа и железнодорожных билетов по всем направлениям на регулярные и чартерные рейсы, оформление виз и страхового полиса, а также организация трансфера и экскурсии в любой точке мира. Мы подберем туры учитывая все Ваши пожелания и на любой бюджет. Воспользоваться услугами и сервисом RIA TRAVEL можно из любой точки мира. В наши задачи входит организация Вашего путешествия со 100% обеспечением комфортного и интересного отдыха. Мы тщательно отбираем туры и предлагаем только лучшие продукты. Нам доверяют постоянные клиенты на протяжении 10 лет.</p>
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
		</>
	);
}

export default About;