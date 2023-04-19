import styles from './TrainCard.module.scss';
import moment from 'moment';
import { BsArrowRight } from 'react-icons/bs';
import trainIcon from '../../../../assets/train.png';
import arrowForward from '../../../../assets/arrowForward.png';

import { NavLink } from 'react-router-dom';

import TimeCard from './TimeCard';
import SeatList from './SeatList';

const TrainCard = ( { data, setId } ) => {
    const { departure } = data;
    const { train, from, to } = departure;
    const duration = moment(departure.duration * 1000).format("HH:mm");
    // console.log('departure', departure);
    return (
        <div className={styles['train-card']}>
            <div className={styles['direction-info']}>
                <div className={styles['direction-info__icon-wrap']}>
                    <img src={trainIcon} className={styles['icon-train']} alt='train' />
                </div>
                <div className={styles['direction-info__num']}>
                    <p className={styles['train-num']}>120B</p>
                </div>
                <div className={styles['direction-info__from-to']}>
                    <div className={styles['target-direction']}>
                        <div className={styles['target-departure']}>
                            <p className={styles['target-departure__item']}>{from.city.name}</p>
                            <BsArrowRight />
                        </div>
                        <div className={styles['target-destination']}>
                            {to.city.name}
                        </div>
                        <div className={styles['direction-info__train']}>
                            <p className={styles['train-name']}>{`« ${train.name} »`}</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles['departure-info']}>
                <div className={styles['departure-info__path']}>
                    <TimeCard data={from} />
                    <div className={styles['arrow-wrapp']}>
                      <p className={styles['departure-info__diff']}>{duration}</p>  
                      <img src={arrowForward} alt='pathTo'/>  
                    </div>
                    <TimeCard data={to}/>
                </div>
            </div>
            <div className={styles['seats-info']}>
                <SeatList data={departure} />
                <div className={styles['btn-wrapper']}>
                    <button className={styles['train-card__btn']} onClick={() => setId(departure['_id'])}>
                        <NavLink to='/order/list/places/train'>Выбрать места</NavLink>
                    </button>
                </div>
            </div>
        </div>
    )
}

export { TrainCard };
