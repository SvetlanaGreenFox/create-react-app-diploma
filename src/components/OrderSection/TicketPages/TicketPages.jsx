import styles from './TicketPages.module.scss';

import TicketList from './TicketList/TicketList';
import AsideSection from './AsideSection/AsideSection';
import PlacesSection from '../PlacesSection/PlacesSection';

import { Outlet, Routes, Route } from 'react-router-dom';

const TicketPages = () => {
    return (
        <section className={styles.ticketPages}>
           <div className={styles['inner-wrapper']}>
            <AsideSection />
            {/* <Routes>
                <Route path='tickets' element={TicketList} />
                <Route path='places' element={<PlacesSection />} />
            </Routes> */}
            {/* <TicketList /> */}
            <Outlet />
           </div>
        </section>
    )
}

export { TicketPages };
