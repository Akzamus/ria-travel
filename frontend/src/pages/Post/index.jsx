import React from 'react';
import {useParams, Link} from 'react-router-dom';
import styles from './Post.module.scss';
import NotFound from '../NotFound';
import axios from 'axios';

function Post() {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <NotFound />;
  }

  const { title, photo, mainText } = post;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/news" className='blueButton'>
          <i className="bi bi-arrow-left"></i> Назад
        </Link>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.post}>
        <img src={photo} alt={title} className={styles.image} />
        <p className={styles.text}>{mainText}</p>
      </div>
    </div>
  );
}

export default Post;