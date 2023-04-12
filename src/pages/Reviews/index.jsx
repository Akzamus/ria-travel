import React from "react";
import styles from "./Reviews.module.scss";

const reviewsData = [
    {
        id: 1,
        name: "Аймурат Бакбергенов",
        photo: "https://randomuser.me/api/portraits/men/10.jpg",
        text: "Доверили свой отдых Вашей компании и не прогадали. Отправил заявку на сайте, мне сразу перезвонили и предложили несколькоинтересных вариантов. Решил заехать в офис, чтобы пообщаться подробнее, договорились на удобное время. Менеджеры помогли определиться с отелем, получилось даже дешевле, чем планировал. Отель превзошел мои ожидания, отлично отдохнули всей семьей! Спасибо за Вашу работу, будем обращаться только в Вам, отправляю к Вам своих друзей и знакомых, пока никто не жаловался.",
    },
    {
        id: 2,
        name: "Алтынай Калиева",
        photo: "https://randomuser.me/api/portraits/women/12.jpg",
        text: "Спасибо за отличный отдых. Менеджеры компании подобрали нам отличный отель на Пхукете. Вид из номера - просто супер, самые лучшие в моей жизни завтраки, приветливый персонал, стильные номера и всё это по приемлемой цене. Теперь только к вам за путёвками и всем своим друзьям советовать буду только вас!",
    },
    {
        id: 3,
        name: "ВАСИЛИЙ ГРИГОРЬЕВИЧ",
        photo: "https://randomuser.me/api/portraits/men/22.jpg",
        text: "Большое спасибо, очень хорошо отдохнули в Египте. Солнце, море, песок, счастье. Поедем еще! ",
    },
];

const Reviews = () => {
    return (
        <div className={styles.reviews}>
            {reviewsData.map((review) => (
                <div className={styles.review} key={review.id}>
                    <img className={styles.photo} src={review.photo} alt={review.name}/>
                    <div className={styles.text}>
                        <h3 className={styles.name}>{review.name}</h3>
                        <p className={styles.reviewText}>{review.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Reviews;