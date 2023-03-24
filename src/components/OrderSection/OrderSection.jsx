import OrderHeader from './OrderHeader';
import FooterSection from '../FooterSection';
import Steps from './Steps';
import TicketPages from './TicketPages';
import TicketList from './TicketPages/TicketList/TicketList';

import styles from './OrderSection.module.scss';
import { Routes, Route } from 'react-router-dom';
import PlacesSection from './PlacesSection/PlacesSection';

const OrderSection = () => {
    
    return (
        <section className={styles.orderSection}>
            <OrderHeader />
            <Steps />
            <Routes>
                <Route path='list/*' element={<TicketPages />} >
                    <Route path='tickets' element={<TicketList />} />
                    <Route path='places' element={<PlacesSection />} />
                </Route>
            </Routes>
            <FooterSection />
        </section>
    )
}

export { OrderSection };
