import styles from './TicketList.module.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectTrain } from '../../../../features/slices/selectTrain';
import axios from 'axios';
import uniqid from 'uniqid';

import TrainCard from '../TrainCard/TrainCard';

const TicketList = () => {
    const ticketList = useSelector(state => state.ticketList);
    const { fromCityId, toCityId, start, end } = ticketList;
    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://netology-trainbooking.netoservices.ru/routes?from_city_id=${fromCityId}&to_city_id=${toCityId}`)
             .then(res => {
                setTickets(res.data);
                setIsLoading(false);
             })
    }, [fromCityId, toCityId, start, end]); 

    function setTrainId (id) {
        dispatch(setSelectTrain(id));
    }

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

export default TicketList;