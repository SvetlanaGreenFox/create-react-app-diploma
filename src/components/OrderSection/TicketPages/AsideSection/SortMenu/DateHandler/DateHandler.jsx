import styles from './DateHandler.module.scss';

import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setStartDate } from '../../../../../../redux/slices/selectDate';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateHandler = () => {
    const { start: startDate} = useSelector(state => state.travelDate);

    const [end, setEnd] = useState(null);

    const dispatch = useDispatch();

    return (
        <div className={styles['wrapper']}>
            <div className={styles['picker-wrapper']}>
            <p className={styles['date-handler__title']}>Дата поездки</p>
                <DatePicker 
                    className={styles.picker}
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={end} 
                    onChange={(date) => dispatch(setStartDate(date))} />
            </div>
            <div className={styles['picker-wrapper']}>
            <p className={styles['date-handler__title']}>Дата возвращения</p>
                <DatePicker
                    className={styles.picker}
                    selected={end}
                    selectsEnd
                    startDate={startDate}
                    endDate={end}
                    minDate={startDate}
                    onChange={(date) => setEnd(date)} />
            </div> 
        </div>
    )
};

export { DateHandler };
