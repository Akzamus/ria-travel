import styles from './InfoCards.module.scss';
import InfoCard from "../InfoCard";
import React from "react";

function InfoCards({cards, cardsHasAdditionalText = false}) {
    return (
        <>
            {
                cards.length !== 0 ? (
                    <div className={styles.cards}>
                        {
                            cards.map(
                                (advantage, index) =>
                                    <InfoCard
                                        key={index}
                                        icon={advantage.icon}
                                        title={advantage.title}
                                        text={advantage.text}
                                    />
                            )
                        }
                    </div>
                ) : (
                    <div className={'emptyBlock'}>
                        <h2>Список отсутствует</h2>
                    </div>
                )
            }
        </>
    );
}

export default InfoCards;