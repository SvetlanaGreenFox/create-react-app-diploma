import styles from './AdvantageCard.module.scss';

const AdvantageCard = (props) => {
    const {text} = props;
    
    return (
        <div className={styles.advantageCard}>
            <div className={styles['icon-wrap']}>{props.children}</div>
            <div className={styles['title-wrap']}>
                <p>{text}</p>
            </div>
        </div>
    )
}

export { AdvantageCard };