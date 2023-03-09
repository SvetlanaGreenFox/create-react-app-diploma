import HeaderSection from '../MainSection/HeaderSection';
import SearchForm from '../MainSection/SearchForm';

import styles from './OrderSection.module.scss';


const OrderSection = () => {
    console.log()
    return (
        <section className={styles.orderSection}>
            <HeaderSection mainStyles={styles.header}>
                <SearchForm/>
            </HeaderSection>
        </section>
    )
}

export { OrderSection };
