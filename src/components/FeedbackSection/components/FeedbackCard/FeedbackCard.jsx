import styles from './FeedbackCard.module.scss';
import gliphLeft from '../../../../assets/gliphLeft.png';
import gliphRight from '../../../../assets/gliphRight.png';

const FeedbackCard = (props) => {
    const { foto, name, text } = props.user;
    console.log(foto);
    return (
        <div className={styles.feedbackCard}>
            <div className={styles['feedbackCard__img-wrap']}>
                <img className={styles.feedbackCard__img} src={ `${foto}` } alt="user" />
            </div>
            <div className={styles['feedbackCard__description-wrap']}>
                <p className={styles.feedbackCard__name}>{ name }</p>
                <p className={styles.feedbackCard__text}>
                    <img src={ gliphLeft } alt="gliph" />  
                    { text }  
                    <img src={ gliphRight } alt="gliph" />
                </p>
            </div>
        </div>
    )
}

export { FeedbackCard };
