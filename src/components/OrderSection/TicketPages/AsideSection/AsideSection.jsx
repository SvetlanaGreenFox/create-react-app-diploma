import styles from './AsideSection.module.scss';

import SortMenu from './SortMenu';
import LastTickets from './LastTickets';

const AsideSection = () => {
    return (
        <section className={styles['aside-section']}>
           <SortMenu />
           <LastTickets /> 
        </section>
    )
}

export { AsideSection };
