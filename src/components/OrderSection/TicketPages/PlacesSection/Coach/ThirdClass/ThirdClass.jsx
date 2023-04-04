import styles from './ThirdClass.module.scss';
import { useSelector } from 'react-redux';

import CoachInfo from '../CoachInfo';

const ThirdClass = () => {
    const coachs = useSelector(state => state.sortSeats.third);

    return (
        <div>
            <CoachInfo coachData={ coachs }/>
        </div>
    )
};

export { ThirdClass };
