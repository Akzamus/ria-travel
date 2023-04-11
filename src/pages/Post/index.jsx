import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Post.module.scss';

function Post({ posts }) {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <div>Post not found.</div>;
  }

  const { title, image, textInDetails } = post;

  return (
		<div className={styles.container}>
		<div className={styles.header}>
		<Link to="/news" className='blueButton'>
			<i className="bi bi-arrow-left"></i> Назад
		</Link>
		<h2 className={styles.title}>{title}</h2>
		</div>
		<div className={styles.post}>
			<img src={image} alt={title} className={styles.image} />
			<p className={styles.text}>{textInDetails} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam alias reiciendis? Accusamus possimus porro, ipsa qui magnam, ipsam quidem quo neque autem quae et vitae atque, minima sed fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste praesentium beatae dolor nostrum iusto, hic alias ipsum architecto consequatur sequi, velit ipsam? Necessitatibus recusandae repudiandae minus? Architecto, quis laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora praesentium cum reiciendis veritatis. Sint sunt accusantium quod ipsam ratione incidunt quam quasi. Natus velit sunt rerum officiis, expedita et. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere accusamus ducimus odit placeat. Consequatur repellat exercitationem, id ipsa magnam recusandae nulla ducimus beatae eum harum repudiandae numquam assumenda tempore asperiores? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum reiciendis nesciunt incidunt fugit quos dicta accusamus temporibus eum neque doloribus suscipit libero nostrum voluptates, eveniet corporis, nemo ducimus? Ex, reprehenderit!</p>
		</div>
		</div>
  );
}

export default Post;