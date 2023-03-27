import styles from './AboutTrain.module.scss';
import { NavLink } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const AboutTrain = () => {

    return (
        <section className={styles['about-train']}>
            <div className={styles['back-btns-group']}>
                <div>
                    <BsArrowRight />
                </div>
                <button>
                    <NavLink to='/order/list/tickets'>Выбрать другой поезд</NavLink>
                </button>
            </div>
        </section>
    )
};

export default AboutTrain;
