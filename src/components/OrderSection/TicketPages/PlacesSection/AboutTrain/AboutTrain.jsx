import styles from './AboutTrain.module.scss';
import { Routes, Route, NavLink } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import Coach from '../Coach/Coach';
import { useState } from 'react';
import cn from 'classnames';

import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { MdStarRate } from 'react-icons/md';
import { TrainLightrailFrontFill } from 'react-bootstrap-icons';
import { TrainFreightFrontFill } from 'react-bootstrap-icons';

import FirstClass from '../Coach/FirstClass';

const AboutTrain = () => {
    const listCoach = [
        {
          path: '/',
          pageName: 'Сидячий',
          icon: <MdOutlineAirlineSeatReclineExtra />,
        },
        {
          path: '/',
          pageName: 'Плацкарт',
          icon: <TrainFreightFrontFill /> ,
        },
        {
          path: '/',
          pageName: 'Купе',
          icon: <TrainLightrailFrontFill />,
        },
        {
          path: 'first',
          pageName: 'Люкс',
          icon: <MdStarRate />,
        },
    ];

    const [classes, setClasses] = useState({
        activeElementId: null,
      });
    
    const activeClasses = cn('coach-menu__item', 'coach-menu__item-active');
    const noActiveClasses = cn('coach-menu__item');

    return (
        <section className={styles['about-train']}>
            <div className={styles['back-btns-group']}>
                <div>
                    <BsArrowRight />
                </div>
                <button>
                    <NavLink to='/order/list/tickets'>Выбрать другой поезд</NavLink>
                </button>
            </div>
            <div className={styles['train-card']}>
                <div className={styles['train-info']}></div>
                <div className={styles['tickets-info']}></div>
                <div className={styles['coach-menu']}>
                    {listCoach.map((item, index) => {
                        return (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={
                            classes.activeElementId === index
                                ? activeClasses
                                : noActiveClasses
                            }
                            onClick={() =>
                            setClasses((prev) => ({ ...prev, activeElementId: index }))
                            }
                        >
                            {item.icon}
                            {item.pageName}
                        </NavLink>
                        );
                    })}
                </div>
                <Coach />
            </div>
        </section>
    )
};

export { AboutTrain };
