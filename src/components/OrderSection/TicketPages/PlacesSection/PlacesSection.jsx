import styles from './PlacesSection.module.scss';
import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';
import { setTotalSeats } from '../../../../features/slices/totalSeats'; 
import AboutTrain from './AboutTrain';
import FirstClass from './Coach/FirstClass';
import SecondClass from './Coach/SecondClass';
import ThirdClass from './Coach/ThirdClass';
import FourthClass from './Coach/FourthClass';


const PlacesSection = () => {
    const departureId = useSelector(state => state.selectTrain);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://netology-trainbooking.netoservices.ru/routes/${departureId.id}/seats`)
        .then(res => {
            dispatch(setTotalSeats(res.data))
        });
    }, []);


    return (
        <section className={styles.places}>
            <h3 className={styles['places__title']}>Выбор мест</h3>
            <Routes>
                <Route path='train/*' exact element={<AboutTrain />}>
                    <Route path='first' element={<FirstClass />}/>
                    <Route path='second' element={<SecondClass />}/>
                    <Route path='third' element={<ThirdClass />}/>
                    <Route path='fourth' element={<FourthClass />}/>
                </Route>
            </Routes>

        </section>
    )
}

export { PlacesSection };
