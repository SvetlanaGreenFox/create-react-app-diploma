import styles from './CoachInfo.module.scss';
// import Scheme from '../SchemeCoach';
import { useState, useEffect } from 'react';

import cn from 'classnames';

import { BiRuble } from 'react-icons/bi';
import { Snow } from 'react-bootstrap-icons';
import { AiOutlineWifi } from 'react-icons/ai';
import { BiBlanket } from 'react-icons/bi';
import { RiCupFill } from 'react-icons/ri';

const CoachInfo = (props) => {
    console.log('CoachInfo');
    const { coachData } = props;
    console.log(coachData);
    const [activeCoachId, setActiveCoachId] = useState(null);
    const [activeCoach, setActiveCoach] = useState();
    const [coachNums, setCoachNums] = useState([]);

    useEffect(() => {
        const prepData = coachData.map((item) => getCoachNum(item));
        setCoachNums(prepData);
        setActiveCoachId(0);
        setActiveCoach(coachData[0]);
    }, [coachData]);

    useEffect (() => {
        setActiveCoach(coachData[activeCoachId]);
    }, [activeCoachId]);

    function getCoachNum (data) {
        const coachName = data.coach.name;
        const numberPattern = /\d+/g;

        return Number(coachName.match( numberPattern ));
    };

    console.log('activeCoach', activeCoach);
    return (
        <div>
            <div className={styles[coachNums.length > 1 ? 'numbers_active' : 'numbers_hidden']}>
                <div className={styles['numbers-wrapper']}>
                    <p className={styles['numbers__title']}>Вагоны</p>
                    <div className={styles['numbers__list']}>
                        {coachNums.map((item, index) => {
                            return (
                                <div 
                                    key={ index } 
                                    className={styles[activeCoachId === index ? 'numbers__item_active' : 'numbers__item']} 
                                    onClick={() => {
                                        setActiveCoachId(index);
                                      }
                                     }
                                    >
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <p className={styles['numbers__notification']}>Нумерация вагонов начинается с головы поезда</p>
            </div>
            { activeCoach ? (
                <div className={styles['coach-info']}>
                <div className={styles['number-section']}>
                    <p className={styles['number-section__number']}>{ getCoachNum(activeCoach)}</p>
                    <p className={styles['number-section__description']}>вагон</p>
                </div>
                <div className={styles['coach-info_inner-wrapper']}>
                    <div className={cn(styles['coach-info__item'], styles['seats-section'])}>
                        <div className={styles['section__item']}>
                            <p className={styles['section__title']}>Места</p>
                            <p className={styles['seats-section__totalCount']}>{ activeCoach.coach['available_seats'] }</p>
                        </div>
                        { activeCoach.coach['class_type'] === 'first' || activeCoach.coach['class_type'] === 'fourth' ? (
                            null
                        ) : ( 
                            <div className={styles['seats-list']}>
                                <div className={styles['section__item']}>
                                    <p className={styles['seats__name']}>Верхние</p>
                                    <p className={styles['seats__count']}>0</p>
                                </div>
                                <div className={styles['section__item']}>
                                    <p className={styles['seats__name']}>Нижние</p>
                                    <p className={styles['seats__count']}>0</p>
                                </div>

                                { activeCoach.coach['class_type'] === 'third' ? (
                                    <div className={styles['section__item']}>
                                        <p className={styles['seats__name']}>Боковые</p>
                                        <p className={styles['seats__count']}>0</p>
                                    </div>
                                    ) : 
                                null }
                            </div>
                        ) }
                    </div>
                    <div className={cn(styles['coach-info__item'], styles['price-section'])}>
                        <div className={styles['section__item']}>
                            <p className={styles['section__title']}>Стоимость</p>
                        </div>
                        { activeCoach.coach['class_type'] === 'first' || activeCoach.coach['class_type'] === 'fourth' ? (
                            <div className={styles['section__item']}>
                                <p className={styles['price']}>{ activeCoach.coach['price'] }</p>
                                <p className={styles['icon-rub']}><BiRuble /></p>
                            </div>
                        ) : (
                            <div className={styles['list']}>
                                <div className={styles['section__item']}>
                                    <p className={styles['price']}>{ activeCoach.coach['top_price'] }</p>
                                    <p className={styles['icon-rub']}><BiRuble /></p>
                                </div>
                                <div className={styles['section__item']}>
                                    <p className={styles['price']}>{ activeCoach.coach['bottom_price'] }</p>
                                    <p className={styles['icon-rub']}><BiRuble /></p>
                                </div>

                                { activeCoach.coach['class_type'] === 'third' ? (
                                    <div className={styles['section__item']}>
                                        <p className={styles['price']}>{ activeCoach.coach['bottom_side'] }</p>
                                        <p className={styles['icon-rub']}><BiRuble /></p>
                                    </div>   
                                ) : null }
                            </div>
                        )}
                    </div>
                    <div className={cn(styles['coach-info__item'], styles['options-section'])}>
                        <div className={styles['section__item']}>
                            <p className={styles['section__title']}>Обслуживание</p>
                            <p className={styles['options__description']}>фпк</p>
                        </div>
                        <div className={styles['options__icons']}>
                            <div className={cn(styles['icon-wrapper'], styles['icon_active'])}><Snow className={styles['option__icon']} /></div>
                            <div className={styles['icon-wrapper']}><AiOutlineWifi className={styles['option__icon']} /></div>
                            <div className={styles['icon-wrapper']}><BiBlanket className={styles['option__icon']} /></div>
                            <div className={styles['icon-wrapper']}><RiCupFill className={styles['option__icon']} /></div> 
                        </div>
                    </div>
                </div>
            </div>
            ) : ''}
        </div>
    )
}

export { CoachInfo };
