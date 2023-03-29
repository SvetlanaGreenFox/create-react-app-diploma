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
import { Outlet } from 'react-router-dom';

const AboutTrain = () => {
    const listCoach = [
        {
          path: 'fourth',
          pageName: 'Сидячий',
          icon: <MdOutlineAirlineSeatReclineExtra />,
        },
        {
          path: 'third',
          pageName: 'Плацкарт',
          icon: <TrainFreightFrontFill /> ,
        },
        {
          path: 'second',
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
    
    const activeClasses = cn(styles['coach-menu__item'], styles['coach-menu__item-active']);
    const noActiveClasses = styles['coach-menu__item'];
    
    return (
        <section className={styles['about-train']}>
            <div className={styles['back-btns-group']}>
                <div className={styles['back-icon__wrapper']}>
                    <BsArrowRight />
                </div>
                <button type='button' className={styles['back-btn']}>
                    <NavLink to='/order/list/tickets'>Выбрать другой поезд</NavLink>
                </button>
            </div>
            <div className={styles['train-card']}>
                <div className={styles['train-info']}>
                    
                </div>
                <div className={styles['tickets-info']}>
                    <p className={styles['title']}>Количество билетов</p>
                    <div className={styles['tickets-info__content']}>

                    </div>
                </div>
                <div className={styles['coach-menu']}>
                    <p className={styles['title']}>Тип вагона</p>
                    <div className={styles['coach-menu__list']}>
                        {listCoach.map((item, index) => {
                            console.log('index', index);
                            return (
                            <NavLink
                                key={index}
                                to={item.path}
                                className= {
                                    classes.activeElementId === index ? 
                                        activeClasses : noActiveClasses 
                                }
                                onClick={() =>
                                setClasses((prev) => ({ ...prev, activeElementId: index }))
                                }
                            >
                                <div className={styles['coach-menu__icon']}>
                                    {item.icon}
                                </div>
                                <div>
                                    {item.pageName}
                                </div>
                            </NavLink>
                            );
                        })}
                    </div>
                </div>
                <Outlet />
                <Coach />
            </div>
        </section>
    )
};

export { AboutTrain };
