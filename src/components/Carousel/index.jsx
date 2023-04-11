import React from 'react';
import styles from './Carousel.module.scss';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={styles.slider}>
      <h3>{slides[currentIndex].title}</h3>
      <div>
        <div onClick={goToPrevious} className={styles.leftArrow}>
          <i className='bi bi-chevron-left'></i>
        </div>
        <div onClick={goToNext} className={styles.rightArrow}>
          <i className='bi bi-chevron-right'></i>
        </div>
      </div>
      <div className={styles.slide} style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
			<div className={styles.dotsContainer}>
        {
					slides.map((slide, index) => (
							<div
								className={`${styles.dot} ${index === currentIndex && styles.active}`}
								key={slide.id}
								onClick={() => goToSlide(index)}
							>
								<i className="bi bi-dot"></i>
							</div>
        		)
					)
				}
      </div>
    </div>
  );
};

export default Carousel;