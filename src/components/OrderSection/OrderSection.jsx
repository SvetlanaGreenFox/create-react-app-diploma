import OrderHeader from './OrderHeader';
import FooterSection from '../FooterSection';
// import Steps from './Steps';
import TicketPages from './TicketPages';
import TicketList from './TicketPages/TicketList';
import LastTicketsList from './TicketPages/LastTicketList';

import styles from './OrderSection.module.scss';
import { Routes, Route } from 'react-router-dom';
import PlacesSection from './TicketPages/PlacesSection';
import FirstClass from './TicketPages/PlacesSection/Coach/FirstClass';
import PassengersSection from './PassengersSection/PassengersSection';
import AboutTrain from './TicketPages/PlacesSection/AboutTrain';


const OrderSection = () => {
    
    return (
        <section className={styles.orderSection}>
            <OrderHeader />
            {/* <Steps /> */}
            <Routes>
                <Route path='list/*' element={<TicketPages />} >
                    <Route path='tickets' element={<TicketList />} />
                    <Route path='last/:id' element={<LastTicketsList />} />
                    <Route path='places/*' element={<PlacesSection />}> 
                        {/* <Route path='train' element={<AboutTrain />}>
                            <Route path='first' element={<FirstClass />}/>
                        </Route> */}
                    </Route>
                </Route>
                <Route path='passengers' element={<PassengersSection />}>
                </Route>
            </Routes>
            <FooterSection />
        </section>
    )
}

export { OrderSection };
