import SearchForm from '../../MainSection/SearchForm';

import styles from './OrderHeader.module.scss';

const OrderHeader = () => {
    return (
        <section className={styles.orderHeader}>
            <SearchForm />
        </section>
    )
}

export { OrderHeader };
