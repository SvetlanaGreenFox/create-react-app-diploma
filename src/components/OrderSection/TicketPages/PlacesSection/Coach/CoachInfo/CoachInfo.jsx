import styles from './CoachInfo.module.scss';
// import Scheme from '../SchemeCoach';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectCoach }  from '../../../../../../redux/slices/selectCoach';

import cn from 'classnames';
// import uniqid from 'uniqid';

import { BiRuble } from 'react-icons/bi';
import { Snow } from 'react-bootstrap-icons';
import { AiOutlineWifi } from 'react-icons/ai';
import { BiBlanket } from 'react-icons/bi';
import { RiCupFill } from 'react-icons/ri';

const CoachInfo = (props) => {
    const { coachData } = props;

    const [activeCoachId, setActiveCoachId] = useState(null);
    const [activeCoach, setActiveCoach] = useState();
    const [coachNums, setCoachNums] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const prepData = coachData.map((item) => getCoachNum(item));
        setCoachNums(prepData);
        setActiveCoachId(0);
        setActiveCoach(coachData[0]);
    }, [coachData]);

    useEffect(() => {
        console.log('coach', coachData[activeCoachId]);
        setActiveCoach(coachData[activeCoachId]);
    }, [activeCoachId]);

    useEffect(() => {
        dispatch(setSelectCoach(activeCoach));   
    }, [activeCoach]);

    function getCoachNum (data) {
        const coachName = data.coach.name;
        const numberPattern = /\d+/g;

        return Number(coachName.match( numberPattern ));
    };
    function removeOption (name) {
        const updateList = selectedOptions.filter(item => item !== name);
        setSelectedOptions(updateList);
    }
    function addOption (name) {
        setSelectedOptions(prev => [...prev, name]);
    }

    const noIncluded = cn(styles['icon-wrapper'], styles['option_noInclided']) //опции не включены и доступны к выбору
    const included = cn(styles['icon-wrapper'], styles['option_included']); //опции включены и от них нельзы отказаться,опции не активны
    const selected = cn(styles['icon-wrapper'], styles['option_selected']); //опции добавлены пользователем к стоимости билеты

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
                                    <p className={styles['seats__count']}>{ (activeCoach.seats.filter(({index, available}) => index % 2 === 0 && available)).length }</p>
                                </div>
                                <div className={styles['section__item']}>
                                    <p className={styles['seats__name']}>Нижние</p>
                                    <p className={styles['seats__count']}>{ (activeCoach.seats.filter(({index, available}) => index % 2 === 1 && available)).length }</p>
                                </div>
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

                                {/* { activeCoach.coach['class_type'] === 'third' ? (
                                    <div className={styles['section__item']}>
                                        <p className={styles['price']}>{ activeCoach.coach['side_price'] }</p>
                                        <p className={styles['icon-rub']}><BiRuble /></p>
                                    </div>   
                                ) : null } */}
                            </div>
                        )}
                    </div>
                    <div className={cn(styles['coach-info__item'], styles['options-section'])}>
                        <div className={styles['section__item']}>
                            <p className={styles['section__title']}>Обслуживание</p>
                            <p className={styles['options__description']}>фпк</p>
                        </div>
                        <div className={styles['options__icons']}>
                            { activeCoach.coach['have_air_conditioning'] ? (
                                <div onClick={ () => selectedOptions.includes('have_air_conditioning') ? 
                                    removeOption('have_air_conditioning') : 
                                    addOption('have_air_conditioning') }
                                    className={ selectedOptions.includes('have_air_conditioning') ? selected : noIncluded}>
                                    <Snow className={styles['option__icon']} />
                                </div>
                            ) : null }
                            
                            <div onClick={ () => selectedOptions.includes('have_wifi') ? 
                                removeOption('have_wifi') : 
                                addOption('have_wifi') } 
                                className={ selectedOptions.includes('have_wifi') ? selected : noIncluded}>
                                    <AiOutlineWifi className={styles['option__icon']} />
                            </div>
                           
                            <div onClick={ () => activeCoach.coach['is_linens_included'] ? null : 
                                selectedOptions.includes('is_linens_included') ? 
                                removeOption('is_linens_included') : 
                                addOption('is_linens_included') }
                                className={ activeCoach.coach['is_linens_included'] ? included : 
                                selectedOptions.includes('is_linens_included') ? selected : noIncluded}>
                                <BiBlanket className={styles['option__icon']} />
                            </div>

                            <div className={ selected }>
                                <RiCupFill className={styles['option__icon']} />
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            ) : ''}
        </div>
    )
}

export { CoachInfo };
