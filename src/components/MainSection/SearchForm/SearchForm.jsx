import { useState } from "react";
import DatePicker from "react-datepicker";
import { NavLink } from "react-router-dom";

import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

import { useEffect, useRef } from "react";
import styles from "./SearchForm.module.scss";
import CitiesList from "./CitiesList";


const SearchForm = () => {
    const [ departure, setDeparture ] = useState('');
    const [ destination, setDestination ] = useState('');
    const [ cities, setCities ] = useState([]);
    const citiesList = useRef(null);

    const [input1, setInput1] = useState({
        name: 'departure',
        value: false
    });
    const [input2, setInput2] = useState({
        name: 'destination',
        value: false
    });

    const [flag, setFlag] = useState(false);

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function targetCity (id) {
        console.log(id);
    }
    
    function upFlag() {
        console.log('flag');
        setFlag(true);
    }

    function testRef (e) {
        console.log('current', e.currentTarget);
        console.log('Nocurrent', !e.currentTarget);
        // console.log('BLURtarget', e.target)
        // if (e.currentTarget === e.target) {
        //     // console.log('unfocused self');
        //     // console.log('Catch');
        //     console.log('1');
        //   } else {
        //     // console.log('unfocused child', e.target);
        //     console.log('2');
        //   }
        console.log(e.relatedTarget);
          if (!e.currentTarget.contains(e.relatedTarget)) {
            // Not triggered when swapping focus between children
            // console.log(e.relatedTarget);
            console.log('catch', e.relatedTarget);
            setInput1(prev => ({...prev, value: false}));
          }
    
            // setInput1(prev => ({...prev, value: false}));
   
        // console.log('blur');
    }

    const removeInput1 = () => setInput1(prev => ({...prev, value: false}));

    function selectInput1 (e) {
        // console.log('FOCUScurrent', e.currentTarget);
        // console.log('Focustarget', e.target)
            if (e.currentTarget === e.target) {
            //   console.log('focused self');
            //   console.log('HEY')
            //   setInput1(prev => ({...prev, value: true}));
            } else {
            //   console.log('focused child', e.target);
            }
            if (!e.currentTarget.contains(e.relatedTarget)) {
              // Not triggered when swapping focus between children
            //   console.log('focus entered self');
            }
        
        setInput1(prev => ({...prev, value: true}));
        // axios
        //     .get(`https://netology-trainbooking.netoservices.ru/routes/cities?name=а`)
        //     .then(res => setCities(res.data));   
    }

    function selectInput2 (event) {
        setInput2(prev => ({...prev, value: true}));
        axios
            .get(`https://netology-trainbooking.netoservices.ru/routes/cities?name=а`)
            .then(res => setCities(res.data));   
    }

    const removeInput2 = () => setInput2(prev => ({...prev, value: false}));

    useEffect(() => {
        
            axios
            .get(`https://netology-trainbooking.netoservices.ru/routes/cities?name=а`)
            .then( res => res.data.error ? console.log(res.data.error) : setCities(res.data))
            ;

    }, []);

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

    return <form className={styles.searchForm}>
        <div className={styles.searchForm__item}>
            <h4 className={styles.searchForm__title}>Направление</h4>
            <div className={styles['searchForm__inputs-wrapper']} >
                <div tabIndex={1} onFocus={selectInput1} onBlur={testRef} className={styles['input-departure']} >
                    <input className={styles.searchForm__input} onChange={(e) => setDeparture(e.target.value)} value={departure} name='departure' type='text' autoComplete="off"/>
                    <div ref={citiesList}  className={input1.value ? styles['cities-list'] : styles.hidden}>
                        <CitiesList cities={cities} selectCity={targetCity} /> 
                    </div>
                </div>
                <div className={styles['input-departure']}>
                    <input className={styles.searchForm__input} onFocus={selectInput2} onBlur={removeInput2} onChange={(e) => setDestination(e.target.value)} name='destination' type='text'/>
                    <div className={input2.value ? styles['cities-list'] : styles.hidden}>
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