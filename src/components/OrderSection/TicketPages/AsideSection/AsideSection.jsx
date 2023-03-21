import styles from './AsideSection.module.scss';

import SortMenu from './SortMenu/SortMenu';
import LastTickets from './LastTickets/LastTickets';

const AsideSection = () => {
    return (
        <section className={styles['aside-section']}>
           <SortMenu />
           <LastTickets /> 
        </section>
    )
}

export default AsideSection;
