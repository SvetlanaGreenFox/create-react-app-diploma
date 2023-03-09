import styles from "./SloganTitle.module.scss";

const SloganTitle = () => {
    return (
    <section className={styles.sloganWrapper}>
        <p className={styles.title}>Вся жизнь - </p>
        <p className={`${styles.title_highlight} ${styles.title} `}>путешествие!</p>
    </section>
    )
}

export { SloganTitle };
