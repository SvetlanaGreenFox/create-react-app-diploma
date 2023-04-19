import styles from './TicketList.module.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSelectTrain } from '../../../../redux/slices/selectTrain';
import axios from 'axios';
import uniqid from 'uniqid';

import TrainCard from '../TrainCard';

const TicketList = () => {
    const { cityFrom, cityTo }= useSelector(state => state.selectedCities);
    const { start, end } = useSelector(state => state.travelDate);
    const { options } = useSelector(state => state.selectOptions);

    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    function prepareDate (date) {
        const month = (date.getMonth() + 1).toString();
        const prepareMonth = month.length === 1 ? `0${month}` : month; 
        
        return `${date.getFullYear()}-${prepareMonth}-${date.getDate()}`;
    }

    useEffect(() => {
        setIsLoading(true);

        axios.get('https://netology-trainbooking.netoservices.ru/routes', {
            params: { 
                'from_city_id': cityFrom.id, 
                'to_city_id': cityTo.id,
                'date_start': start ? prepareDate(start) : {},
                'date_start_arrival': end ? prepareDate(end) : {},
                'have_first_class': options['have_first_class'] ? options['have_first_class'] : {},
                'have_second_class': options['have_second_class'] ? options['have_second_class'] : {},
                'have_third_class': options['have_third_class'] ? options['have_third_class'] : {},
                'have_fourth_class': options['have_fourth_class'] ? options['have_fourth_class'] : {},
                'have_wifi': options['have_wifi'] ? options['have_wifi'] : {},
                'have_express': options['have_express'] ? options['have_express'] : {},
            }
        })
             .then(res => {
                setTickets(res.data);
                setIsLoading(false);
             })
    }, [cityFrom, cityTo, start, end, options]); 

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

export { TicketList };
