import styles from './SeatList.module.scss';

import SeatCard from './SeatCard';


const SeatList = ({ data }) => {

    const count = data['available_seats_info'];
    const price = data['price_info'];
    
    return (
        <div className={styles['seat-list']}>
            <div className={styles[data['have_fourth_class'] ? 'active' : 'hidden']}>
                {data['have_fourth_class'] && <SeatCard name='сидячий' count={ count.fourth } price={ price.fourth } />}
            </div>
            <div className={styles[data['have_third_class'] ? 'active' : 'hidden']}>
                {data['have_third_class'] && <SeatCard name='плацкарт' count={ count.third } price={ price.third } />}
            </div>
            <div className={styles[data['have_second_class'] ? 'active' : 'hidden']}>
                {data['have_second_class'] && <SeatCard name='купе' count={ count.second } price={ price.second } />}
            </div>
            <div className={styles[data['have_first_class'] ? 'active' : 'hidden']}>
                {data['have_first_class'] && <SeatCard name='люкс' count={ count.first } price={ price.first } />}
            </div>
        </div>
    )
}

export default SeatList;
