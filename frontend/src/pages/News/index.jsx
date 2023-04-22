import React from "react";
import styles from "./News.module.scss";
import {Link} from "react-router-dom";
import {ErrorsContext} from "../../errorsContext";
import Error from "../Error";

function News({posts}) {
    const {hasServerError} = React.useContext(ErrorsContext);

    if (hasServerError) {
        return <Error
            code={500}
            text={'Возникла ошибка при получении данных с сервера'}
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