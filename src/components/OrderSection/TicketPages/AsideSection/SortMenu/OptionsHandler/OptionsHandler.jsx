import styles from './OptionsHandler.module.scss';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setOptions } from '../../../../../../redux/slices/selectOptions';

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
            option: 'have_second_class',
            name: 'купе',
            icon: <TrainLightrailFrontFill className={styles.test}/>
        },
        {
            option: 'have_third_class',
            name: 'плацкарт',
            icon: <TrainFreightFrontFill />
        },
        {
            option: 'have_fourth_class',
            name: 'сидячий',
            icon: <MdOutlineAirlineSeatReclineExtra />
        },
        {
            option: 'have_first_class',
            name: 'люкс',
            icon: <MdStarRate />
        },
        {
            option: 'have_wifi',
            name: 'wi-fi',
            icon: <AiOutlineWifi />
        },
        {
            option: 'have_express',
            name: 'экспресс',
            icon: <FaRocket />
        }
    ];

    const [optionsStatus, setOptionStatus] = useState ({
        'have_first_class': false,
        'have_second_class': false,
        'have_third_class': false,
        'have_fourth_class': false,
        'have_wifi': false,
        'have_express': false
    });

    const dispatch = useDispatch();

    const optionsHandler = (opt) => {
        setOptionStatus(prev => ({...prev, [opt]: !prev[opt] }))
    }
    
    const activeClasses = cn(styles['switch-btn'], styles['option__item'], styles['switch-btn_active']);
    const noActiveClasses = cn(styles['switch-btn'], styles['option__item']);

    useEffect(()=> {
        dispatch(setOptions(optionsStatus));
    }, [optionsStatus])

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
