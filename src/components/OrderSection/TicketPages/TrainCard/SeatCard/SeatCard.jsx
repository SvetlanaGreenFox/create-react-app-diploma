import styles from './SeatCard.module.scss';
import min from 'lodash.min';
import { BiRuble } from 'react-icons/bi';

const SeatCard = ({ name, count, price }) => {
    const minPrice = (arr) => min(Object.values(arr));

    return (
        <div className={styles['card-wrapper']}>
            <div className={styles['name-wrapper']}>
                <p className={styles['seat-name']}>{ name }</p>
            </div>
            <div className={styles['count-wrapper']}>
                <p className={styles['seat-count']}>{ count }</p>
            </div>
            <div className={styles['price-wrapper']}>
                <span>от</span>
                <span className={styles['min-price']}>{ minPrice(price) }</span>
                <div className={styles['icon-rub']}> <BiRuble /></div>
            </div>
        </div>
    )
}

export { SeatCard };
