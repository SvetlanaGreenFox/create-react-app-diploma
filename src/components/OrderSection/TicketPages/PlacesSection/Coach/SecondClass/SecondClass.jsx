import styles from './SecondClass.module.scss';
import { useSelector } from 'react-redux';

const SecondClass = () => {
    const seats = useSelector(state => state.sortSeats.second);
    console.log('second', seats);

    return (
        <div>
            second
        </div>
    )
};

export { SecondClass };