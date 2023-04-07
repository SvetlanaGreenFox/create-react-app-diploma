import styles from './AboutTrain.module.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortSeats } from '../../../../../redux/slices/sortSeats';

import cn from 'classnames';

import { BsArrowRight } from 'react-icons/bs';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { MdStarRate } from 'react-icons/md';
import { TrainLightrailFrontFill } from 'react-bootstrap-icons';
import { TrainFreightFrontFill } from 'react-bootstrap-icons';

const AboutTrain = () => {
    const listCoach = [
        {
          path: 'fourth',
          classType: 'fourth',
          pageName: 'Сидячий',
          icon: <MdOutlineAirlineSeatReclineExtra />,
        },
        {
          path: 'third',
          classType: 'third',
          pageName: 'Плацкарт',
          icon: <TrainFreightFrontFill /> ,
        },
        {
          path: 'second',
          classType: 'second',
          pageName: 'Купе',
          icon: <TrainLightrailFrontFill />,
        },
        {
          path: 'first',
          classType: 'first',
          pageName: 'Люкс',
          icon: <MdStarRate />,
        },
    ];

    const totalSeats = useSelector(state => state.totalSeats.seats);
    const [seats, setSeats] = useState({
        first: [],
        second: [],
        third: [],
        fourth: [],
    });
    const dispatch = useDispatch();

    useEffect(() => {
        const firstClass = totalSeats.filter(elem => elem.coach['class_type'] === 'first');
        const secondClass = totalSeats.filter(elem => elem.coach['class_type'] === 'second');
        const thirdClass = totalSeats.filter(elem => elem.coach['class_type'] === 'third');
        const fourthClass = totalSeats.filter(elem => elem.coach['class_type'] === 'fourth');

        setSeats(prev => ({ ...prev, first: firstClass, second: secondClass, third: thirdClass, fourth: fourthClass }))
        
    }, [totalSeats]);

    useEffect(() => {
        // передать в редюсер?
        dispatch(setSortSeats(seats));
    }, [seats]);

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
                                if (seats[item.classType].length > 0) {
                                    return <NavLink
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
                                };
                            })
                        }
                    </div>
                </div>
                <Outlet />
            </div>
        </section>
    )
};

export { AboutTrain };
