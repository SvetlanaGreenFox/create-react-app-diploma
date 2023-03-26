import SearchForm from '../../MainSection/SearchForm';

import styles from './OrderHeader.module.scss';

const OrderHeader = () => {
    return (
        <section className={styles.header}>
            <div className={styles['header__content']}>
               <SearchForm />
            </div>
        </section>
    )
}

export { OrderHeader };
