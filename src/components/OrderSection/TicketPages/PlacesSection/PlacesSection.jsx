import styles from './PlacesSection.module.scss';
import { NavLink } from 'react-router-dom';

import AboutTrain from './AboutTrain/AboutTrain';


const PlacesSection = () => {
    return (
        <section className={styles.places}>
            <h3 className={styles['places__title']}>Выбор мест</h3>
            <AboutTrain />
            <button onClick={() => console.log('Work2')}>
                <NavLink to='/order/list/tickets'>Вернуться к выбору билетов</NavLink>
            </button>
            <button onClick={() => console.log('Work2')}>
                <NavLink to='/order/list/passengers'>Далее</NavLink>
            </button>
        </section>
    )
}

export default PlacesSection;
