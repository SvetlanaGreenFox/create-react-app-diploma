import styles from './FourthClass.module.scss';
import { useSelector } from 'react-redux';

const FourthClass = () => {
    const seats = useSelector(state => state.sortSeats.fourth);
    console.log('fourth', seats);

    return (
        <div>
            fourth
        </div>
    )
};

export { FourthClass };
