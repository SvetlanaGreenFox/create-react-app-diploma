import styles from './ThirdClass.module.scss';
import { useSelector } from 'react-redux';

const ThirdClass = () => {
    const seats = useSelector(state => state.sortSeats.third);
    console.log('third', seats);

    return (
        <div>
            third
        </div>
    )
};

export { ThirdClass };
