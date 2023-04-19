import styles from "./SearchForm.module.scss";

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import CitiesList from "./CitiesList";
import { setCityFrom, setCityTo } from '../../../redux/slices/selectCities';
import { setStartDate, setEndDate } from '../../../redux/slices/selectDate';

import swapIcon from '../../../assets/swap.png';
import axios from "axios";


const SearchForm = () => {
    const { start: startDate, end: endDate } = useSelector(state => state.travelDate);
    const { cityFrom, cityTo } = useSelector(state => state.selectedCities);
    console.log('города', cityFrom.name, cityTo.name);
    const [ departure, setDeparture ] = useState('');
    const [ destination, setDestination ] = useState('');
    const [ cities, setCities ] = useState([]);
    const [direction, setDirection] = useState({
        cityFrom: {
            id: null,
            name: ''
        },
        cityTo: {
            id: null,
            name: ''
        }
    })
    const [input, setInput] = useState({
        departure: false,
        destination: false,
    })
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);

    const dispatch = useDispatch();

    function sendData (e) {
        e.preventDefault();

        if (!cityFrom.name || departure !== cityFrom.name) dispatch(setCityFrom(direction.cityFrom));
        if (!cityTo.name || destination !== cityTo.name) dispatch(setCityTo(direction.cityTo));
        console.log(start, end);
        dispatch(setStartDate(start));
        dispatch(setEndDate(end));
    }
    
    function targetCity (obj) {
        const targetElem = cities.find(item => item['_id'] === obj['_id']);
        const city = targetElem.name;

        if (input.departure) {
            setDeparture(city);
            setDirection(prev => ({ ...prev, cityFrom: {id: obj['_id'], name: city}}));
            setInput(prev => ({...prev, departure: false}));
        }
        if (input.destination) {
            setDestination(city);
            setDirection(prev => ({ ...prev, cityTo: {id: obj['_id'], name: city}}));
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
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setInput(prev => ({...prev, departure: false}));
          }
    }

    function removeInput2 (e) {
        // if (e.currentTarget === e.target) {
        //     // console.log('unfocused self');
        //   } else {
        //     // console.log('unfocused child', e.target);
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

    useEffect(() => {
        setDeparture(cityFrom.name);
        setDestination(cityTo.name);
        setStart(startDate);
        setEnd(endDate);
    }, [startDate, endDate]);

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
                <img onClick={() => swapCities} className={styles['swap-icon']} src={swapIcon} alt='change places'/>
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
                        selected={start}
                        selectsStart
                        startDate={start}
                        endDate={end} 
                        onChange={(date) => setStart(date)}
                    /></div>
                    
                    <div className={styles['picker-wrapper']}>
                    <DatePicker
                            className={styles.picker}
                            selected={end}
                            selectsEnd
                            startDate={start}
                            endDate={end}
                            minDate={start}
                            onChange={(date) => setEnd(date)}
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