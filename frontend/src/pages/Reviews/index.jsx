import React from "react";
import styles from "./Reviews.module.scss";
import {AppContext} from "../../appContext";
import Info from "../Info";

function Reviews() {
    const [reviews, setReviews] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const {hasServerError, setHasServerError, api} = React.useContext(AppContext);

    React.useEffect(() => {
        api.get('/reviews/')
            .then(response => {
                setReviews(response.data);
                setLoading(false);
            })
            .catch(error => {
                if (error.response.status !== 404) {
                    setHasServerError(true);
                }
                setLoading(false);
            });
    }, [setHasServerError, api]);

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
        <div className={styles.reviews}>
            {
                reviews.map(
                    (review) => (
                        <div className={styles.review} key={review.id}>
                            <img className={styles.photo} src={review.photo || '/img/anonymous.jpg'} alt={review.name}/>
                            <div className={styles.text}>
                                <h3 className={styles.name}>{review.name}</h3>
                                <p className={styles.reviewText}>{review.text}</p>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    );
}

export default Reviews;