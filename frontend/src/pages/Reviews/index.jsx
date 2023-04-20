import React from "react";
import styles from "./Reviews.module.scss";
import axios from "axios";

function Reviews() {
    const [reviews, setReviews] = React.useState([]);

	React.useEffect(() => {
		axios.get('http://localhost:8000/api/v1/reviews/')
			.then(response => {
				setReviews(response.data);
			})
			.catch(error => {
				alert('Не удалось получить отзывы');
			});
	}, []);

    return (
        <div className={styles.reviews}>
            {
                reviews.map(
                    (review) => (
                        <div className={styles.review} key={review.id}>
                            <img className={styles.photo} src={review.photo ? review.photo : '/img/anonymous.jpg'} alt={review.name}/>
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