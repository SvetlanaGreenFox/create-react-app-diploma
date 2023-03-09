import styles from './Steps.module.scss';
import cx from 'classnames';

const Steps = () => {
    return (
        <section className={styles.steps}>
            <div className={cx(styles['steps-item'], styles['steps-item-1'])}>
                <p className={styles['steps__name']}>Билеты</p>
            </div>
            <div className={styles['steps-item']}>
                <p className={styles['steps__name']}>Пассажиры</p>
            </div>
            <div className={styles['steps-item']}>
                <p className={styles['steps__name']}>Оплата</p>
            </div>
            <div className={styles['steps-item']}>
                <p className={styles['steps__name']}>Проверка</p>
            </div>
        </section>
    )
}

export { Steps };
