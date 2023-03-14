import styles from './Steps.module.scss';

const Steps = () => {
    return (
        <section className={styles.steps}>
            <div className={styles['steps-item']}>
                <div className={styles.rectangle}>
                    <h2 className={styles['steps__name']}>Билеты</h2>
                </div>
                <span className={styles.triangle}></span>
            </div>

            <div className={styles['steps-item']}>
                <div className={styles.rectangle2}>
                    <h2 className={styles['steps__name']}>Билеты</h2>
                </div>
                <span className={styles.triangle}></span>
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
