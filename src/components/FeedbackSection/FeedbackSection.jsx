import FeedbackList from './components/FeedbackList';
import Carousel from './components/Carousel';

import styles from './FeedbackSection.module.scss';

const FeedbackSection = () => {
    return (
        <section className={styles.feedbackSection}>
            <h3 className={styles.feedbackSection__title}>Отзывы</h3>
            <div className={styles.feedbackSection__list}>
                <FeedbackList />
            </div>
            <Carousel />
        </section>
    )
}

export { FeedbackSection };
