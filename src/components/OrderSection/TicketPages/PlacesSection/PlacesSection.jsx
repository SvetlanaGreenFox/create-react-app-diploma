import styles from './PlacesSection.module.scss';

import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AboutTrain from './AboutTrain/AboutTrain';


const PlacesSection = () => {
    const departureId = useSelector(state => state.selectTrain);
    const [seats, setSeats] = useState();

    useEffect(() => {
        axios.get(`https://netology-trainbooking.netoservices.ru/routes/${departureId.id}/seats`)
        .then(res => setSeats(res.data));
    }, []);

    console.log(seats);

    return (
        <section className={styles.places}>
            <h3 className={styles['places__title']}>Выбор мест</h3>
            <AboutTrain />
        </section>
    )
}

export default PlacesSection;
