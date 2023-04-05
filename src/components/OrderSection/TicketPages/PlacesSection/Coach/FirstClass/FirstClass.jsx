import styles from './FirstClass.module.scss';
import { useSelector } from 'react-redux';

import CoachInfo from '../CoachInfo';
import SchemeFirstClass from '../CoachSchemes/ShemeFirstClass';


const FirstClass = () => {
    console.log('first');
    const coachs = useSelector(state => state.sortSeats.first);
    const selectCoach = useSelector(state => state.selectCoach);
    console.log('select', selectCoach.activeCoach);

    return (
        <div>
            <CoachInfo coachData={ coachs }/>
            <div className={styles['scheme-wrapper']}>
                { selectCoach.activeCoach ? <SchemeFirstClass data={ selectCoach.activeCoach.seats }/> : null }
            </div>
        </div>
    )
};

export { FirstClass };
