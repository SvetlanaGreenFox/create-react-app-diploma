import styles from './TicketList.module.scss';
import { useSelector } from 'react-redux';

const TicketList = () => {
    const tickets = useSelector(state => state.ticketList);
    console.log('redux state', tickets);

    return (
        <section></section>
    )
}

export default TicketList;