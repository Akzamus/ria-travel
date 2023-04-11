import styles from './SocialNetworks.module.scss';

function SocialNetworks({list}) {
    return (
        <div className={styles.socialNetworkIcons}>
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

export default SocialNetworks;