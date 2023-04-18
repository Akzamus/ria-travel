import React from "react";
import styles from "./News.module.scss";
import {Link} from "react-router-dom";

function News({posts}) {

    return (
        <div className={styles.newsBlock}>
            {
                posts.map(
                    post => (
                        <div className={styles.post} key={post.id}>
                            <div className={styles.imageContainer}>
                                <img src={post.image} alt={post.title}/>
                            </div>
                            <div className={styles.postContent}>
                                <h3>{post.title}</h3>
                                <p>{post.textInPreview}</p>
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