import styles from './TicketPages.module.scss';

import TicketList from './TicketList/TicketList';
import AsideSection from './AsideSection/AsideSection';

const TicketPages = () => {
    return (
        <section className={styles.ticketPages}>
           <div className={styles['inner-wrapper']}>
            <AsideSection />
            <TicketList />
           </div>
        </section>
    )
}

export { TicketPages };
