import { useState } from "react";
import DatePicker from "react-datepicker";
import { NavLink } from "react-router-dom";

// import CitiesList from "./CitiesList";

import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

import { useEffect } from "react";
import styles from "./SearchForm.module.scss";


const SearchForm = () => {

    // fetch( 'https://netology-trainbooking.netoservices.ru/routes/cities?name=мос' )
    // .then( response => response.json())
    // .then( data => console.log( data ));

    const [state, setState] = useState({
        departure: '',
        destination: ''
    })

    const [departure, setDeparture] = useState('');

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    

    useEffect(() => {
        axios
            .get(`https://netology-trainbooking.netoservices.ru/routes/cities?name=${departure}`)
            .then(res => console.log(res.data))
    }, [departure])

    return <form className={styles.searchForm}>
        <div className={styles.searchForm__item}>
            <h4 className={styles.searchForm__title}>Направление</h4>
            <div className={styles.searchForm__inputsWrapper}>
                <input className={styles.searchForm__input} onChange={(event) => setDeparture(event.target.value)} value={departure} name='departure' type='text'/>
                <input className={styles.searchForm__input}  name='destination' type='text'/>
            </div>
            {/* <CitiesList cities={departure}/> */}
        </div>
        <div className={styles.searchForm__item}>
            <h4 className={styles.searchForm__title}>Дата</h4>
            <div className={styles.searchForm__inputsWrapper}>
                <div className={styles['picker-wrapper']}><DatePicker 
                        className={styles.picker}
                        selected={startDate}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate} 
                        onChange={date => setStartDate(date)}
                    /></div>
                    
                    <div className={styles['picker-wrapper']}>
                    <DatePicker
                            className={styles.picker}
                            selected={endDate}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            onChange={date => setEndDate(date)}
                        />
                    </div>
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