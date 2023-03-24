import styles from "./SearchForm.module.scss";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTickets } from '../../../features/slices/ticketList';
import swapIcon from '../../../assets/swap.png';

import CitiesList from "./CitiesList";


const SearchForm = () => {
    const [ departure, setDeparture ] = useState('');
    const [ destination, setDestination ] = useState('');
    const [ cities, setCities ] = useState([]);
    const [ selectCity, setSelectCity ] = useState([]);
    const [direction, setDirection] = useState({
        fromCityId: '',
        toCityId: ''
    })
    const [input, setInput] = useState({
        departure: false,
        destination: false,
    })
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const dispatch = useDispatch();

    function prepareDate (date) {
        const month = (date.getMonth() + 1).toString();
        const prepareMonth = month.length === 1 ? `0${month}` : month; 
        
        return `${date.getFullYear()}-${prepareMonth}-${date.getDate()}`;
    } 

    function sendData (e) {
        e.preventDefault();

        const prepareStartDate = startDate ? prepareDate(startDate) : null;
        const prepareEndDate = endDate ? prepareDate(endDate) : null;
        
        dispatch(setTickets({...direction, start: prepareStartDate, end: prepareEndDate}));
    }
    
    function targetCity (id) {

        const targetElem = cities.find(item => item['_id'] === id);
        const city = targetElem.name;

        if (input.departure) {
            setDeparture(city);
            setDirection(prev => ({ ...prev, fromCityId: id}));
            setInput(prev => ({...prev, departure: false}));
        }
        if (input.destination) {
            setDestination(city);
            setDirection(prev => ({ ...prev, toCityId: id}));
            setInput(prev => ({...prev, destination: false}));
        }
    }

    function activeInput (e) {

        const target = e.target.name;
        
        if (target === 'departure') {
            setInput(prev => ({...prev, departure: true, destination: false}))
        }
        if (target === 'destination') {
            setInput(prev => ({...prev, departure: false, destination: true}))
        }
    } 

    function removeInput1 (e) {
        // console.log('BLURtarget', e.target)
        // if (e.currentTarget === e.target) {
        //     // console.log('unfocused self');
        //     // console.log('Catch');
        //     console.log('1');
        //   } else {
        //     // console.log('unfocused child', e.target);
        //     console.log('2');
        //   }
          if (!e.currentTarget.contains(e.relatedTarget)) {
            // Not triggered when swapping focus between children
            setInput(prev => ({...prev, departure: false}));
          }
    }

    function removeInput2 (e) {
        // console.log('BLURtarget', e.target)
        // if (e.currentTarget === e.target) {
        //     // console.log('unfocused self');
        //     // console.log('Catch');
        //     console.log('1');
        //   } else {
        //     // console.log('unfocused child', e.target);
        //     console.log('2');
        //   }
          if (!e.currentTarget.contains(e.relatedTarget)) {
            // Not triggered when swapping focus between children
            setInput(prev => ({...prev, destination: false}));
          }
    }

    useEffect(() => {
        if (input.departure || input.destination) {
            axios
            .get(`https://netology-trainbooking.netoservices.ru/routes/cities?name=а`)
            .then( res => res.data.error ? console.log(res.data.error) : setCities(res.data));
        }
    }, [input])

    useEffect(() => {
        console.log('2');
        if (departure.length > 0) {
            axios
            .get(`https://netology-trainbooking.netoservices.ru/routes/cities?name=${departure}`)
            .then( res => res.data.error ? console.log(res.data.error) : setCities(res.data))
            ;
        }

        return;
    }, [departure]);

    useEffect(() => {
        if (destination.length > 0) {
            axios
            .get(`https://netology-trainbooking.netoservices.ru/routes/cities?name=${destination}`)
            .then( res => res.data.error ? console.log(res.data.error) : setCities(res.data))
            ;
        }

        return;
    }, [destination]);

    function swapCities () {
        
        setDeparture(destination);
        setDestination(departure);
    }


    return <form className={styles.searchForm}>
        <div className={styles.searchForm__item}>
            <h4 className={styles.searchForm__title}>Направление</h4>
            <div className={styles['searchForm__inputs-wrapper']} >
                <div tabIndex={1} onFocus={activeInput} onBlur={removeInput1} className={styles['input-departure']} >
                    <input className={styles.searchForm__input} onChange={(e) => setDeparture(e.target.value)} value={departure} name='departure' type='text' autoComplete="off"/>
                    <div className={input.departure ? styles['cities-list'] : styles.hidden}>
                        <CitiesList cities={cities} selectCity={targetCity} /> 
                    </div>
                </div>
                <img onClick={() => swapCities} className={styles['swap-icon']} src={swapIcon}/>
                <div tabIndex={1} onFocus={activeInput} onBlur={removeInput2} className={styles['input-departure']}>
                    <input className={styles.searchForm__input} onChange={(e) => setDestination(e.target.value)} value={destination} name='destination' type='text' autoComplete="off"/>
                    <div className={input.destination ? styles['cities-list'] : styles.hidden}>
                        <CitiesList cities={cities} selectCity={targetCity} /> 
                    </div>
                </div>  
            </div>
        </div>
        <div className={styles.searchForm__item}>
            <h4 className={styles.searchForm__title}>Дата</h4>
            <div className={styles['searchForm__inputs-wrapper']}>
                <div className={styles['picker-wrapper']}><DatePicker 
                        className={styles.picker}
                        selected={startDate}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate} 
                        onChange={(date) => setStartDate(date)}
                    /></div>
                    
                    <div className={styles['picker-wrapper']}>
                    <DatePicker
                            className={styles.picker}
                            selected={endDate}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            onChange={(date) => setEndDate(date)}
                        />
                    </div>
                </div>
            </div>
        <div className={styles.searchForm__btnWrapper}>
            <button onClick={sendData} type="submit" className={styles.searchForm__btn}>
                <NavLink to='/order/list/tickets'>Найти билеты</NavLink>
            </button>
        </div>
    </form>
}

export { SearchForm };