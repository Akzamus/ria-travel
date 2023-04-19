import styles from './Links.module.scss';

function Links({list}) {
    return (
        <div className={styles.linksIcons}>
            {
                list.map(
                    item =>
                        <a key={item.id} href={item.url}>
                            <i className={item.icon}></i>
                        </a>
                )
            }
        </div>
    );
}

export default Links;