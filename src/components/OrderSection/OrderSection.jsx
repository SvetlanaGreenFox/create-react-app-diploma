import OrderHeader from './OrderHeader';
import FooterSection from '../FooterSection';
import Steps from './Steps';
import TicketPages from './TicketPages';

import styles from './OrderSection.module.scss';
// import { useEffect } from 'react';


const OrderSection = () => {
    
    // useEffect(() => {
    //     fetch( 'https://netology-trainbooking.netoservices.ru/routes/last' )
    //     .then( response => response.json() )
    //     .then( data => console.log(data) );
    // }, []);

    return (
        <section className={styles.orderSection}>
            <OrderHeader />
            <Steps />
            <TicketPages />
            <FooterSection />
        </section>
    )
}

export { OrderSection };
