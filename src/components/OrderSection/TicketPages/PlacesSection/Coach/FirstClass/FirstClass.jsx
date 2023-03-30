import styles from './FirstClass.module.scss';
import { useSelector } from 'react-redux';

const FirstClass = () => {
    const seats = useSelector(state => state.sortSeats.first);
    console.log('first', seats);

    return (
        <div>
            first
        </div>
    )
};

export { FirstClass };
