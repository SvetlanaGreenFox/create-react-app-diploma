import { data } from './testData/data';
import FeedbackCard from '../FeedbackCard';
import styles from './FeedbackList.module.scss';

const FeedbackList = () => {
    return (
        <section className={styles.feedbackList}>
            {data.map(item => {
                return (
                    <FeedbackCard key={item.id} user={item} />
                )
            })}
        </section>
    )
}

export { FeedbackList };
