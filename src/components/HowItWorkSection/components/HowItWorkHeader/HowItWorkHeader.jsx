import styles from "./HowItWorkHeader.module.scss";

const HowItWorkHeader = () => {
    return (
        <section className={styles.howItWorkHeader}>
            <div className={styles.howItWorkHeader__title}>
                <p className={styles.title}>Как это работает</p>
            </div>
            <div className={styles.howItWorkHeader__btn}>
                <button type="submit" className={styles['btn-more']}>Узнать больше</button>
            </div>
        </section>
    )
}

export { HowItWorkHeader };
