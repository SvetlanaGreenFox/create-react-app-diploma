import styles from './TrainCard.module.scss';
import train from '../../../../../assets/train.png';
import {BsArrowRight} from 'react-icons/bs';

const TrainCard = ( { data } ) => {
   console.log(data.departure);
   const { departure } = data;
   const { train, from, to } = departure;
   
   
   
    
    return (
        <div className={styles['train-card']}>
            <div className={styles['direction-info']}>
                <div className={styles['direction-info__icon-wrap']}>
                    <img className={styles['icon-train']} src={train} />
                
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
            <div className={styles['departure-info']}></div>
            <div className={styles['price-info']}></div>
        </div>
    )
}

export default TrainCard;
