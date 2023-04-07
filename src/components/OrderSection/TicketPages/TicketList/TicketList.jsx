import styles from './TicketList.module.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSelectTrain } from '../../../../features/slices/selectTrain';
import axios from 'axios';
import uniqid from 'uniqid';

import TrainCard from '../TrainCard';

const TicketList = () => {
    const ticketData= useSelector(state => state.ticketList);
    console.log('TicketList', ticketData);
    const { fromCityId, toCityId, start, end } = ticketData;
    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
   
    useEffect(() => {
        setIsLoading(true);

        axios.get('https://netology-trainbooking.netoservices.ru/routes', {
            params: { 
                'from_city_id': fromCityId, 
                'to_city_id': toCityId,
                'date_start': start ? start : {},
                'date_start_arrival': end ? end : {}
            }
        })
             .then(res => {
                setTickets(res.data);
                setIsLoading(false);
             })
    }, [fromCityId, toCityId, start, end]); 

    function setTrainId (id) {
        dispatch(setSelectTrain(id));
    }
    console.log(tickets);

    return (
        <section className={styles['ticketList-wrapper']}>
            {isLoading ? <p>Идет закгрузка</p> : 
            <ul>
                { tickets.items ? tickets.items.map( item => {
                    return (
                        <li className={styles['ticketList__item']} key={uniqid()}>
                            <TrainCard data={item} setId={setTrainId}/>
                        </li>)
                    }) : <p>Nothing</p> 
                }
            </ul>
            }
        </section>
    )
}

export { TicketList };
