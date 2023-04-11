import React from "react";
import styles from "./News.module.scss";
import { Link } from "react-router-dom";

function News({ posts }) {

  return (
    <div className={styles.newsBlock}>
			{
				posts.map(
					post => (
						<div className={styles.post} key={post.id}>
							<div className={styles.imageContainer}>
								<img src={post.image} alt={post.title} />
							</div>
							<div className={styles.postContent}>
								<h2>{post.title}</h2>
								<p>{post.textInPreview}</p>
							</div>
							{
								post.hasTextInDetails ? (
									<Link className='blueButton' to={`/news/${post.id}`}>Подробнее</Link>
								) : null
							}
						</div>
					)
				)
			}
    </div>
  );
}

export default News;