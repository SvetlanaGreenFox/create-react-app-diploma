import styles from './OptionsHandler.module.scss';
import { useState } from 'react';

import uniqid from 'uniqid';
import cn from 'classnames';

import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { MdStarRate } from 'react-icons/md';
import { TrainLightrailFrontFill } from 'react-bootstrap-icons';
import { TrainFreightFrontFill } from 'react-bootstrap-icons';
import { AiOutlineWifi } from 'react-icons/ai';
import { FaRocket } from 'react-icons/fa';

const OptionsHandler = () => {
    const options = [
        {
            option: 'second',
            name: 'купе',
            icon: <TrainLightrailFrontFill className={styles.test}/>
        },
        {
            option: 'third',
            name: 'плацкарт',
            icon: <TrainFreightFrontFill />
        },
        {
            option: 'fourth',
            name: 'сидячий',
            icon: <MdOutlineAirlineSeatReclineExtra />
        },
        {
            option: 'first',
            name: 'люкс',
            icon: <MdStarRate />
        },
        {
            option: 'wifi',
            name: 'wi-fi',
            icon: <AiOutlineWifi />
        },
        {
            option: 'express',
            name: 'экспресс',
            icon: <FaRocket />
        }
    ];

    const [optionsStatus, setOptionStatus] = useState ({
        first: false,
        second: false,
        third: false,
        fourth: false,
        wifi: false,
        express: false
    });

    const optionsHandler = (opt) => {
        setOptionStatus(prev => ({...prev, [opt]: !prev[opt] }))
    }
    
    const activeClasses = cn(styles['switch-btn'], styles['option__item'], styles['switch-btn_active']);
    const noActiveClasses = cn(styles['switch-btn'], styles['option__item']);

    return (
        <div className={styles['options-wrapper']}>
            {options.map((item) => {
                return (
                    <div key={uniqid()} className={styles['option']}>
                        <div onClick className={cn(styles.icon, styles['option__item'])}>{item.icon}</div>
                        <div className={cn(styles.name, styles['option__item'])}>{item.name}</div>
                        <div onClick={() => optionsHandler(item.option)} className={ optionsStatus[item.option] ? activeClasses : noActiveClasses }></div>
                    </div>
                )
            })}   
        </div>
    )
};

export { OptionsHandler };
