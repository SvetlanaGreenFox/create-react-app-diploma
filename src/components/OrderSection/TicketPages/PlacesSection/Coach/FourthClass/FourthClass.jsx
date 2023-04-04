import styles from './FourthClass.module.scss';
import { useSelector } from 'react-redux';

import CoachInfo from '../CoachInfo';

const FourthClass = () => {
    const coachs = useSelector(state => state.sortSeats.fourth);

    return (
        <div>
            <CoachInfo coachData={ coachs }/>
        </div>
    )
};

export { FourthClass };
