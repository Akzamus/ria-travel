import React from "react";
import styles from "./News.module.scss";
import {Link} from "react-router-dom";
import {AppContext} from "../../appContext";
import Info from "../Info";

function News({posts, loading}) {
    const {hasServerError} = React.useContext(AppContext);

    if (hasServerError) {
        return <Info
            errorCode={500}
            text={'Возникла ошибка при получении данных с сервера'}
        />
    }

    if (loading) {
        return <Info
            text={'Загрузка...'}
        />
    }

    return (
        <div className={styles.newsBlock}>
            {
                posts.map(
                    post => (
                        <div className={styles.post} key={post.id}>
                            <div className={styles.imageContainer}>
                                <img src={post.photo} alt={post.title}/>
                            </div>
                            <div className={styles.postContent}>
                                <h3>{post.title}</h3>
                                <p>{post.previewText}</p>
                            </div>
                            <div className={styles.buttonContainer}>
                                <Link className='blueButton' to={`/news/${post.id}`}>Подробнее</Link>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    );
}

export default News;