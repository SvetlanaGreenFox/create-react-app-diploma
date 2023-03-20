import styles from './TicketPages.module.scss';

import TicketList from './TicketList/TicketList';

const TicketPages = () => {
    return (
        <section className={styles.test}>
           <div></div> 
            <TicketList />
        </section>
    )
}

export { TicketPages };
