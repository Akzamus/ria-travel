import React from "react";
import styles from './ContactForm.module.scss'
import InputMask from "react-input-mask";

function ContactForm() {
	const [name, setName] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [country, setCountry] = React.useState('');
	const [formErrors, setFormErrors] = React.useState({});
	const [permission, setPermission] = React.useState(false);
	const [isSubmitted, setIsSubmitted] = React.useState(false);

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
		const properNamesRegex = /^[\p{L}\s'\-]+$/u;
		const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
		let valid = true;
		const errors = {};

		if (!permission) {
			errors.permission = 'Для отправки формы нужно ваше соглашение';
			valid = false
		}

		if (!properNamesRegex.test(name)) {
			errors.name = 'Имя может содержать только буквы и разделительные символы';
			valid = false;
		}

		if (!phoneRegex.test(phone)) {
			errors.phone = 'Пожалуйста, введите корректный номер телефона';
			valid = false;
		}

		if (!properNamesRegex.test(country)) {
			errors.country = 'Название страны может содержать только буквы и разделительные символы';
			valid = false;
		}

		setFormErrors(errors);
		return valid;
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.formHeader}>
				<h2>Контактная форма</h2>
				<p>Заполните форму и мы свяжемся с вами в ближайшее время</p>
				{isSubmitted && <div className={styles.success}>Форма отправлена!</div>}
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="name">Имя:</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder='Введите свое имя'
					required
				/>
				{formErrors.name && <div className={styles.error}>{formErrors.name}</div>}
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="phone">Номер телефона:</label>
				<InputMask
					mask="+7 (999) 999-99-99"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					placeholder="+7 (___) ___-__-__"
					required
				/>
				{formErrors.phone && <div className={styles.error}>{formErrors.phone}</div>}
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
				{formErrors.country && <div className={styles.error}>{formErrors.country}</div>}
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
				{formErrors.permission && <div className={styles.error}>{formErrors.permission}</div>}
			</div>
			<button type="submit">Отправить</button>
		</form >
	);
}

export default ContactForm;