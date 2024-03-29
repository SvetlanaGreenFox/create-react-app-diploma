import styles from './LastTicketCard.module.scss';
import { AiOutlineWifi } from 'react-icons/ai';
import { FaRocket } from 'react-icons/fa';
import { RiCupFill } from 'react-icons/ri';
import { BiRuble } from 'react-icons/bi';
import cn from 'classnames';

const LastTicketCard = (props) => {
//    console.log('props', props);
    const { data } = props;
    const { departure } = data;
    const { from, to } = departure;
    
    function addOptionClass (option) {
        return ( option ? 'active' : 'hidden');  
    }
    
    return (
        <div className={styles['last-ticket-card']} >
            <div className={styles['last-ticket-card__from-to']}>
                <div className={styles['last-ticket-card__from']}>
                    <p className={styles.city}>{from.city.name}</p>
                    <p className={styles.railway}>{`${from['railway_station_name']} вокзал`}</p>
                </div>
                <div className={styles['last-ticket-card__to']}>
                    <p className={styles.city}>{to.city.name}</p>
                    <p className={styles.railway}>{`${to['railway_station_name']} вокзал`}</p>
                </div>
            </div>
            <div className={styles['last-ticket-card__price']}>
                <div className={styles['last-ticket-card__options']}>
                    <div className={cn(styles['train-options__icon'], styles[addOptionClass(departure['have_wifi'])])}>
                        <AiOutlineWifi />
                    </div>
                    <div className={cn(styles['train-options__icon'], styles[addOptionClass(departure['is_express'])])}>
                        <FaRocket />
                    </div>
                    <div className={cn(styles['train-options__icon'], styles[addOptionClass(departure['have_first_class'])])}>
                        <RiCupFill /></div>
                </div>
                <div className={styles['last-ticket-card__price']}>
                    <span className={ styles['price__item']  }>от</span>
                    <span className={ cn(styles['min-price'], styles['price__item']) }>{data['min_price']}</span>
                    <div className={ styles['icon-rub'] }><BiRuble /></div>
                </div>
            </div>
        </div>
    )
};

export { LastTicketCard } ;
