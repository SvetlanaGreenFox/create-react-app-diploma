import { useState } from "react";
import DatePicker from "react-datepicker";
import { NavLink } from "react-router-dom";

import styles from "./SearchForm.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const SearchForm = () => {
    const [state, setState] = useState({
        departure: '',
        destination: ''
    })

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function inputHandler (event) {
        setState({ ...state, [event.target.name]: event.target.value})
    }

    return <form className={styles.searchForm}>
        <div className={styles.searchForm__item}>
            <h4 className={styles.searchForm__title}>Направление</h4>
            <div className={styles.searchForm__inputsWrapper}>
                <input className={styles.searchForm__input} onChange={inputHandler} value={state.departure} name='departure' type='text'/>
                <input className={styles.searchForm__input} onChange={inputHandler} value={state.destination} name='destination' type='text'/>
            </div>
        </div>
        <div className={styles.searchForm__item}>
            <h4 className={styles.searchForm__title}>Дата</h4>
            <div className={styles.searchForm__inputsWrapper}>
                    <DatePicker 
                        wrapperClassName={styles.picker}
                        selected={startDate}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate} 
                        onChange={date => setStartDate(date)}
                    />
                    <div className={styles.picker}><DatePicker
                        selected={endDate}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        onChange={date => setEndDate(date)}
                    /></div>
                    
                </div>
            </div>
        <div className={styles.searchForm__btnWrapper}>
            <button type="submit" className={styles.searchForm__btn}>
                <NavLink to='/tickets'>Найти билеты</NavLink>
            </button>
        </div>
    </form>
}

export { SearchForm };