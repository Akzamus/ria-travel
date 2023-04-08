import styles from './Advantage.module.scss';

function Advantage({ icon, title, text }) {
	return (
		<div className={styles.advantage}>
		<div className={styles.header}>
			<i className={icon}></i>
			<h3>{title}</h3>
		</div>
		<p>{text}</p>
	</div>
	);
}

export default Advantage;