import styles from './TicketList.module.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import uniqid from 'uniqid';

import TrainCard from './TrainCard/TrainCard';

const TicketList = () => {
    const ticketList = useSelector(state => state.ticketList);
    const { fromCityId, toCityId, start, end } = ticketList;
    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://netology-trainbooking.netoservices.ru/routes?from_city_id=${fromCityId}&to_city_id=${toCityId}`)
             .then(res => {
                setTickets(res.data);
                setIsLoading(false);
             })
    }, [fromCityId, toCityId, start, end]); 

    console.log('билеты', tickets.items);
    return (
        <section>
            {isLoading ? <p>Идет закгрузка</p> : 
            <div>
                { tickets.items.map( item => {
                    return <div key={uniqid()}><TrainCard data={item}/></div>
                    }) 
                }
            </div>
            }
        </section>
    )
}

export default TicketList;