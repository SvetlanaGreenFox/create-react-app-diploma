import styles from './ThirdClass.module.scss';
import { useSelector } from 'react-redux';

import CoachInfo from '../CoachInfo';
import SchemeThirdClass from '../CoachSchemes/SchemeThirdClass';

const ThirdClass = () => {
    const coachs = useSelector(state => state.sortSeats.third);
    const selectCoach = useSelector(state => state.selectCoach);

    // console.log(selectCoach.activeCoach.seats);
    return (
        <div>
            <CoachInfo coachData={ coachs }/>
            <div className={styles['scheme-wrapper']}>
                { selectCoach.activeCoach ? <SchemeThirdClass data={ selectCoach.activeCoach.seats }/> : null }
            </div>
        </div>
    )
};

export { ThirdClass };
