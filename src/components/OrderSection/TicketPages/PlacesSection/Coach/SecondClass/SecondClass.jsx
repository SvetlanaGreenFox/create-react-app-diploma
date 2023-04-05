import styles from './SecondClass.module.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// import cn from 'classnames';

import SchemeSecondClass from '../CoachSchemes/SchemeSecondClass';
import CoachInfo from '../CoachInfo';

// import { BiRuble } from 'react-icons/bi';
// import { Snow } from 'react-bootstrap-icons';
// import { AiOutlineWifi } from 'react-icons/ai';
// import { BiBlanket } from 'react-icons/bi';
// import { RiCupFill } from 'react-icons/ri';

// import Coach from '../Coach';

const SecondClass = () => {
    console.log('second');
    const coachs = useSelector(state => state.sortSeats.second);
    console.log(coachs);
    const selectCoach = useSelector(state => state.selectCoach);
    // console.log('select', selectCoach.activeCoach);
    // const [activeCoachId, setActiveCoachId] = useState(null);
    // const [activeCoach, setActiveCoach] = useState();
    // const [coachNums, setCoachNums] = useState([]);

    // useEffect(() => {
    //     const prepData = coachs.map((item) => getCoachNum(item));
    //     setCoachNums(prepData);
    //     setActiveCoachId(0);
    //     setActiveCoach(coachs[0]);
    // }, []);

    // useEffect (() => {
    //     setActiveCoach(coachs[activeCoachId]);
    // }, [activeCoachId]);

    // function getCoachNum (data) {
    //     const coachName = data.coach.name;
    //     const numberPattern = /\d+/g;

    //     return Number(coachName.match( numberPattern ));
    // };

    return (
        <div className={styles.coach}>
            {/* <div className={styles[coachNums.length > 1 ? 'numbers_active' : 'numbers_hidden']}>
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
            <div className={styles['coach-info']}>
                <div className={styles['number-section']}>
                    <p className={styles['number-section__number']}>{ activeCoach ? getCoachNum(activeCoach) : ''}</p>
                    <p className={styles['number-section__description']}>вагон</p>
                </div>
                <div className={styles['coach-info_inner-wrapper']}>
                    <div className={cn(styles['coach-info__item'], styles['seats-section'])}>
                        <div className={styles['section__item']}>
                            <p className={styles['section__title']}>Места</p>
                            <p className={styles['seats-section__totalCount']}>20</p>
                        </div>
                        <div className={styles['seats-list']}>
                            <div className={styles['section__item']}>
                                <p className={styles['seats__name']}>Верхние</p>
                                <p className={styles['seats__count']}>10</p>
                            </div>
                            <div className={styles['section__item']}>
                                <p className={styles['seats__name']}>Нижние</p>
                                <p className={styles['seats__count']}>10</p>
                            </div>
                        </div>
                    </div>
                    <div className={cn(styles['coach-info__item'], styles['price-section'])}>
                        <div className={styles['section__item']}>
                            <p className={styles['section__title']}>Стоимость</p>
                        </div>
                        <div className={styles['list']}>
                            <div className={styles['section__item']}>
                                <p className={styles['price']}>2200</p>
                                <p className={styles['icon-rub']}><BiRuble /></p>
                            </div>
                            <div className={styles['section__item']}>
                                <p className={styles['price']}>2200</p>
                                <p className={styles['icon-rub']}><BiRuble /></p>
                            </div>
                        </div>
                    </div>
                    <div className={cn(styles['coach-info__item'], styles['options-section'])}>
                        <div className={styles['section__item']}>
                            <p className={styles['section__title']}>Обслуживание</p>
                            <p className={styles['options__description']}>фпк</p>
                        </div>
                        <div className={styles['options__icons']}>
                            <div className={styles['icon-wrapper']}><Snow className={styles['option__icon']} /></div>
                            <div className={styles['icon-wrapper']}><AiOutlineWifi className={styles['option__icon']} /></div>
                            <div className={styles['icon-wrapper']}><BiBlanket className={styles['option__icon']} /></div>
                            <div className={styles['icon-wrapper']}><RiCupFill className={styles['option__icon']} /></div> 
                        </div>
                    </div>
                </div>
            </div> */}

            <CoachInfo coachData={ coachs }/>
            
            <div className={styles['scheme-wrapper']}>
                { selectCoach.activeCoach ? <SchemeSecondClass data={ selectCoach.activeCoach.seats }/> : null }
            </div>

        </div>
    )
        
    
};

export { SecondClass };