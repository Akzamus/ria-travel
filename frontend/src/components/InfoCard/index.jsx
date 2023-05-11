import styles from './InfoCard.module.scss';

function InfoCard({icon, title, text}) {
    return (
        <div className={styles.infoCard}>
            <div className={styles.header}>
                <i className={icon}></i>
                <h3>{title}</h3>
            </div>
            <p>{text}</p>
        </div>
    );
}

export default InfoCard;