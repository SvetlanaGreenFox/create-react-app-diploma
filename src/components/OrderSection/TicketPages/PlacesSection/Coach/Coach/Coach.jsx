import styles from './Coach.module.scss';
import Scheme from '../Scheme';

const Coach = () => {
    return (
        <div className={styles.coach}>
            <div className={styles['numbers-list']}>
                <div className={styles['numbers-list__wrapper']}>
                    <p>Вагоны</p>
                </div>
                <div className={styles['numbers-list__notification']}></div>
            </div>
            <div className={styles['coach-info']}>
                <div className={styles['number-wrapper']}>
                    <p className={styles['coach-info__num']}>12</p>
                    <p className={styles['coach-info__desc']}>вагон</p>
                </div>
            </div>
            <div className={styles['seats-wrapper']}>
                <div>
                    <p className={styles['title']}>Места</p>
                    <p className={styles['seats__total']}>20</p>
                </div>
                <div className={styles['list']}>
                    <div className={styles['list__item']}>
                        <p className={styles['seat-name']}>Верхние</p>
                        <p className={styles['seat-count']}>10</p>
                    </div>
                    <div className={styles['list__item']}>
                        <p className={styles['seat-name']}>Нижние</p>
                        <p className={styles['seat-count']}>10</p>
                    </div>
                </div>
            </div>
            <div className={styles['price-wrapper']}>
                <div>
                    <p className={styles['title']}>Стоимость</p>
                </div>
                <div className={styles['list']}>
                    <div className={styles['list__item']}>
                        <p className={styles['price']}>2200</p>
                        <p className={styles['icon-rub']}>10</p>
                    </div>
                    <div className={styles['list__item']}>
                        <p className={styles['price']}>2200</p>
                        <p className={styles['icon-rub']}>10</p>
                    </div>
                </div>
            </div>
            <div className={styles['options-wrapper']}>
                <div>
                    <p className={styles['title']}>Обслуживание</p>
                    <p className={styles['title']}>фпк</p>
                </div>
                <ul className={styles['options__icons']}>
                </ul>
            </div>
            <div className={styles['scheme']}>
                <Scheme />
            </div>
        </div>
    )
}

export { Coach };
