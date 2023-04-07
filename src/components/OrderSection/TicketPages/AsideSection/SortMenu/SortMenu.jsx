import styles from './SortMenu.module.scss';

import DateHandler from './DateHandler';
import OptionsHandler from './OptionsHandler';
import PriceHandler from './PriceHandler';

const SortMenu = () => {
    return (
        <section className={styles['sort-menu']}>
            <DateHandler />
            <OptionsHandler />
            <PriceHandler />
        </section>
    )
};

export { SortMenu };
