import styles from './Title.module.scss';

const Title = (props) => {
    const { title } = props;
    return (
        <section className={styles['title-wrapper']}>
            <p className={styles.title}>{title}</p>
        </section>
    )
}

export { Title };
