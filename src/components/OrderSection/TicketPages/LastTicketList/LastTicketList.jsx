import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const LastTicketsList = () => {
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://netology-trainbooking.netoservices.ru/routes/${id}/seats`)
        .then(res => console.log(res.data));
    }, [id])

    return (
        <div>
           Ghby 
        </div>
    )
}

export { LastTicketsList };
