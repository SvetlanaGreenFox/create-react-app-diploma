import styles from './DateHandler.module.scss';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { setNewStartDate, setNewEndDate } from '../../../../../../features/slices/ticketList';


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateHandler = () => {
    const ticketData= useSelector(state => state.ticketList);
    const { start, end } = ticketData;

    console.log('DateHandler', start, end);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const dispatch = useDispatch();

    function prepareDate (date) {
        const month = (date.getMonth() + 1).toString();
        const prepareMonth = month.length === 1 ? `0${month}` : month; 
        
        return `${date.getFullYear()}-${prepareMonth}-${date.getDate()}`;
    }

    useEffect(() => {
        if (startDate) {
            dispatch(setNewStartDate(prepareDate(startDate)));
        }
        if (endDate) {
            dispatch(setNewEndDate(prepareDate(endDate)));
        }
    }, [startDate, endDate]);

    return (
        <div>
            <div className={styles['picker-wrapper']}>
                <DatePicker 
                    className={styles.picker}
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate} 
                    onChange={(date) => setStartDate(date)} />
            </div>
            <div className={styles['picker-wrapper']}>
                <DatePicker
                    className={styles.picker}
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    onChange={(date) => setEndDate(date)} />
            </div> 
        </div>
    )
};

export { DateHandler };
