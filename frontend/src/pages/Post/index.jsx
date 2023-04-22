import React from 'react';
import {useParams, Link} from 'react-router-dom';
import styles from './Post.module.scss';
import Error from '../Error';
import axios from 'axios';
import {ErrorsContext} from "../../errorsContext";

function Post() {
    const {id} = useParams();
    const [post, setPost] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const {hasServerError, setHasServerError} = React.useContext(ErrorsContext);

    React.useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/posts/${id}`)
            .then((response) => {
                setPost(response.data);
                setLoading(false);
            })
            .catch(() => {
                setHasServerError(true);
            });
    }, [id, setHasServerError]);

    if (hasServerError) {
        return <Error
            code={500}
            text={'Возникла ошибка при получении данных с сервера'}
        />
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!post) {
        return <Error code={404} text={'Страница не найдена'}/>;
    }

    const {title, photo, mainText} = post;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link to="/news" className='blueButton'>
                    <i className="bi bi-arrow-left"></i> Назад
                </Link>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <div className={styles.post}>
                <img src={photo} alt={title} className={styles.image}/>
                <p className={styles.text}>{mainText}</p>
            </div>
        </div>
    );
}

export default Post;