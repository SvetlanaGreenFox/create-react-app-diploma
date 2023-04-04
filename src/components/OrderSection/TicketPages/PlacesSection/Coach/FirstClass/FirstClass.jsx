import styles from './FirstClass.module.scss';
import { useSelector } from 'react-redux';
import CoachInfo from '../CoachInfo';

const FirstClass = () => {
    const coachs = useSelector(state => state.sortSeats.first);

    return (
        <div>
            <CoachInfo coachData={ coachs }/>
        </div>
    )
};

export { FirstClass };
