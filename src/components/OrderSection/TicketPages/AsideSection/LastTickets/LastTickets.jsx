import styles from './LastTickets.module.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import uniqid from 'uniqid';

import LastTicketCard from '../LastTicketCard/LastTicketCard';

const LastTickets = () => {
    const [lastTickets, setLastTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://netology-trainbooking.netoservices.ru/routes/last')
        .then(res => {
            setLastTickets(res.data);
            setIsLoading(false);
        });
    }, []);
    
    return (
        <section className={styles['last-section']}>
            <p className={styles['last-section__title']}>Последние билеты</p>
            {isLoading ? <p>Loading</p> : <ul>
                { lastTickets.map(item => {
                    return (
                        <li className={styles['last-section__item']} key={uniqid()}>
                            <LastTicketCard data={item}/>
                        </li>
                    )
                })}
            </ul>}
        </section>
    )
}

export default LastTickets;
