import styles from './DateHandler.module.scss';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { setNewStartDate, setNewEndDate } from '../../../../../../redux/slices/ticketList';


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateHandler = () => {
    const ticketData= useSelector(state => state.ticketList);
    const { start, end } = ticketData;

    console.log('DateHandler', start, end);
    const [startDate, setStartDate] = useState(null);
    // const [endDate, setEndDate] = useState(null);

    //если дата отъезда уже есть - ее можно сразу внести в поле, чтобы пользователь понимал от какой даты отталкиваться
    //если в дату оправления введено значение, сравнить его с датой end
    //если введенное значение раньше чем end то можно использовать end для фильтрации и нужно бы эту дату передать в поле поиска чтобы было очевидно что она измелась
    //если введенное значение позже, то end придется обнулить, чтобы фильтрация присходила корректно
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
    }, [startDate]);

    return (
        <div>
            <div className={styles['picker-wrapper']}>
                <DatePicker 
                    className={styles.picker}
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    // endDate={endDate} 
                    onChange={(date) => setStartDate(date)} />
            </div>
            {/* <div className={styles['picker-wrapper']}>
                <DatePicker
                    className={styles.picker}
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    onChange={(date) => setEndDate(date)} />
            </div>  */}
        </div>
    )
};

export { DateHandler };
