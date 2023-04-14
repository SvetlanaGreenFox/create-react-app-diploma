import styles from './SortMenu.module.scss';

import { useState } from 'react';

import DateHandler from './DateHandler';
import OptionsHandler from './OptionsHandler';
import PriceHandler from './PriceHandler';

const SortMenu = () => {
    const [optionStatus, setOptionStatus] = useState ([
        {
            name: 'купе',
            alue: false
        },
        {
            name: 'плацкарт',
            value: false
        },
        {
            name: 'сидячий',
            value: false
        },
        {
            name: 'люкс',
            value: false
        },
        {
            name: 'wi-fi',
            value: false
        },
        {
            name: 'экспресс',
            value: false
        }
    ]);

    function optionHandler (name) {
        console.log(name);
        // setState(name);
        
    }

    return (
        <section className={styles['sort-menu']}>
            <DateHandler />
            <OptionsHandler />
            <PriceHandler />
        </section>
    )
};

export { SortMenu };
