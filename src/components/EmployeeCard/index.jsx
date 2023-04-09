import React from 'react';
import styles from './EmployeeCard.module.scss';

function EmployeeCard({ photo, name, experience }) {
	const formatExperience = (years) => {
		if (years % 10 === 1 && years !== 11) {
			return years + ' год';
		} else if (years % 10 >= 2 && years % 10 <= 4 && (years < 10 || years > 20)) {
			return years + ' года';
		} else {
			return years + ' лет';
		}
	}

  return (
		<div className={ styles.card }>
			<div className={ styles.photoContainer }>
				<img className={ styles.photo } src={ photo } alt={ name } />
			</div>

			<h3 className={ styles.name }>{ name }</h3>
			<p className={ styles.experience }>{ formatExperience(Number(experience)) } стажа</p>
		</div>
  );
}

export default EmployeeCard;