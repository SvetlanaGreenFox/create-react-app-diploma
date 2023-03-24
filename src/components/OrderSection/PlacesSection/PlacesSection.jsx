import styles from './PlacesSection.module.scss';
import { NavLink } from 'react-router-dom';

const PlacesSection = () => {
    return (
        <section className={styles.places}>
            <button onClick={() => console.log('Work2')}>
                    <NavLink to='/order/list/tickets'>Выбрать места</NavLink>
                </button>
        </section>
    )
}

export default PlacesSection;
