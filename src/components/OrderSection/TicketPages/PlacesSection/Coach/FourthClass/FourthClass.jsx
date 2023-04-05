import styles from './FourthClass.module.scss';
import { useSelector } from 'react-redux';

import CoachInfo from '../CoachInfo';
import SchemeFourthClass from '../CoachSchemes/SchemeFourthClass';

const FourthClass = () => {
    const coachs = useSelector(state => state.sortSeats.fourth);
    const selectCoach = useSelector(state => state.selectCoach);

    return (
        <div>
            <CoachInfo coachData={ coachs }/>
            <div className={styles['scheme-wrapper']}>
                { selectCoach.activeCoach ? <SchemeFourthClass data={ selectCoach.activeCoach.seats }/> : null }
            </div>
        </div>
    )
};

export { FourthClass };
