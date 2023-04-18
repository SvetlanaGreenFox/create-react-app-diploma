import styles from './SortMenu.module.scss';

import { useState } from 'react';

import cn from 'classnames';

import DateHandler from './DateHandler';
import OptionsHandler from './OptionsHandler';
import PriceHandler from './PriceHandler';
import TimeHandler from './TimeHandler';

import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';

const SortMenu = () => {
    const [timeHandlersState, setTimeHandlersState] = useState({
        to: false,
        from: false
    });

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
            <div className={styles['time-handler']}>
                <div className={styles['time-handler__header']}>
                    <div className={styles['time-handler__icon']}>
                        <BsArrowRight />
                    </div>
                    <div className={styles['time-handler__title']}>Туда</div>
                    <div className={styles['btn-wrapper']} onClick={() => setTimeHandlersState(prev => ({...prev, to: !prev.to}))}>
                        <button type='button' className={styles['time-handler__btn']}>{timeHandlersState.to ? '-' : '+'}</button>
                    </div>
                </div>
                <div className={cn(styles['time-handler__slider'], styles[timeHandlersState.to ? 'open' : 'close'])}>
                    <TimeHandler />  
                </div>
            </div>
            <div className={styles['time-handler']}>
                <div className={styles['time-handler__header']}>
                <div className={styles['time-handler__icon']}>
                        <BsArrowLeft />
                    </div>
                    <div className={styles['time-handler__title']}>Обратно</div>
                    <div className={styles['btn-wrapper']} onClick={() => setTimeHandlersState(prev => ({...prev, from: !prev.from}))}>
                        <button type='button' className={styles['time-handler__btn']}>{timeHandlersState.from ? '-' : '+'}</button>
                    </div>
                </div>
                <div className={cn(styles['time-handler__slider'], styles[timeHandlersState.from ? 'open' : 'close'])}>
                    <TimeHandler />
                </div>
            </div>
            
        </section>
    )
};

export { SortMenu };
