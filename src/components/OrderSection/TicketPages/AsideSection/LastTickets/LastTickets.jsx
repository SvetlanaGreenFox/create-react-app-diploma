import styles from './LastTickets.module.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';

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
                            <Link to={`last/${item.departure['_id']}`} onClick={()=> console.log('hi')} >
                                <LastTicketCard data={item}/>
                            </Link>
                        </li>
                        
                    )
                })}
            </ul>}
        </section>
    )
}

export default LastTickets;
