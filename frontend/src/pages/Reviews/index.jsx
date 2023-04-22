import React from "react";
import styles from "./Reviews.module.scss";
import axios from "axios";
import {ErrorsContext} from "../../errorsContext";
import Error from "../Error";

function Reviews() {
    const [reviews, setReviews] = React.useState([]);
    const {hasServerError, setHasServerError} = React.useContext(ErrorsContext);

    React.useEffect(() => {
        axios.get('http://localhost:8000/api/v1/reviews/')
            .then(response => {
                setReviews(response.data);
            })
            .catch(_ => {
                setHasServerError(true);
            });
    }, [setHasServerError]);

    if (hasServerError) {
        return <Error
            code={500}
            text={'Возникла ошибка при получении данных с сервера'}
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