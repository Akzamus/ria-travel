import { CSSTransition } from 'react-transition-group';
import React from 'react';
import styles from './ContactForm.module.scss'
import InputMask from "react-input-mask";

function ContactForm() {
	const [name, setName] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [country, setCountry] = React.useState('');
	const [formErrors, setFormErrors] = React.useState({});
	const [permission, setPermission] = React.useState(false);
	const [isSubmitted, setIsSubmitted] = React.useState(false);

	const fadeClassNames = {
		enter: styles.fadeEnter,
		enterActive: styles.fadeEnterActive,
		exit: styles.fadeExit,
		exitActive: styles.fadeExitActive,
	};

	const errorTexts= {
		permission: 'Для отправки формы нужно ваше соглашение',
		name: 'Имя может содержать только буквы и разделительные символы',
		phone: 'Пожалуйста, введите корректный номер телефона',
		country: 'Название страны может содержать только буквы и разделительные символы'
	}

	const properNamesRegex = /^[\p{L}\s'-]+$/u;
	const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formValid() && permission) {
			setName('');
			setPhone('');
			setCountry('');
			setIsSubmitted(true);
			setPermission(false);
		}
	};

	const formValid = () => {
		setIsSubmitted(false);
		const errors = {};

		errors.permissionIsNotValid = !permission;
		errors.nameIsNotValid = !properNamesRegex.test(name);
		errors.phoneIsNotValid = !phoneRegex.test(phone);
		errors.countryIsNotValid = !properNamesRegex.test(country);

		setFormErrors(errors);

		return !(
			errors.permissionIsNotValid || errors.nameIsNotValid || 
			errors.phoneIsNotValid || errors.countryIsNotValid
		);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>

			<div className={styles.formHeader}>
				<h2>Контактная форма</h2>
				<p>Заполните форму и мы свяжемся с вами в ближайшее время</p>
				<CSSTransition
					in={isSubmitted}
					timeout={300}
					classNames={fadeClassNames}
					unmountOnExit
				>
					<div className={styles.success}>Форма отправлена!</div>
				</CSSTransition>
			</div>

			<div className={styles.formGroup}>
				<label htmlFor='name'>Имя:</label>
				<input
					type='text'
					id='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder='Введите свое имя'
					required
				/>
				<CSSTransition
					in={formErrors.nameIsNotValid}
					timeout={300}
					classNames={fadeClassNames}
					unmountOnExit
				>
					<div className={styles.error}>{errorTexts.name}</div>
				</CSSTransition>
			</div>

			<div className={styles.formGroup}>
				<label htmlFor='phone'>Номер телефона:</label>
				<InputMask
					mask='+7 (999) 999-99-99'
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					placeholder="+7 (___) ___-__-__"
					required
				/>
				<CSSTransition
					in={formErrors.phoneIsNotValid}
					timeout={300}
					classNames={fadeClassNames}
					unmountOnExit
				>
					<div className={styles.error}>{errorTexts.phone}</div>
				</CSSTransition>
			</div>

			<div className={styles.formGroup}>
				<label htmlFor="country">Страна:</label>
				<input
					type="text"
					id="country"
					value={country}
					onChange={(e) => setCountry(e.target.value)}
					placeholder='Введите желаемую страну посещения'
					required
				/>
				<CSSTransition
					in={formErrors.countryIsNotValid}
					timeout={300}
					classNames={fadeClassNames}
					unmountOnExit
				>
					<div className={styles.error}>{errorTexts.country}</div>
				</CSSTransition>
			</div>

			<div className={styles.formGroup}>
				<label>
					<input className={styles.checkbox}
						type="checkbox"
						id="permission"
						checked={permission}
						onChange={() => setPermission(!permission)}
					/>
					<>Я даю согласие на <a href="index.html">обработку персональных данных</a></>
				</label>
				<CSSTransition
					in={formErrors.permissionIsNotValid}
					timeout={300}
					classNames={fadeClassNames}
					unmountOnExit
				>
					<div className={styles.error}>{errorTexts.permission}</div>
				</CSSTransition>
			</div>
			<button type="submit">Отправить</button>
		</form >
	);
}

export default ContactForm;