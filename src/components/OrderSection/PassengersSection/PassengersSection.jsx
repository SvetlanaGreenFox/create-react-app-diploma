import styles from './PassengersSection.module.scss';
import { NavLink } from 'react-router-dom';

const PassengersSection = () => {
    
    return (
        <section>
            <button>
                <NavLink to='/order/list/places'>Вернуться к выбору мест</NavLink>
            </button>
        </section>
    )
};

export default PassengersSection;
