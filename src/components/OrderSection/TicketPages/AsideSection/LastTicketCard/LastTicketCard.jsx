import styles from './LastTicketCard.module.scss';
import { AiOutlineWifi } from 'react-icons/ai';
import { MdRocketLaunch } from 'react-icons/md';
import { RiCupFill } from 'react-icons/ri';

const LastTicketCard = (props) => {
    console.log(props.data);
    const { data } = props;
    const { departure: { from, to } } = data;
    console.log(data['min_price']);
    
    return (
        <div className={styles['last-ticket-card']}>
            <div className={styles['last-ticket-card__from-to']}>
                <div className={styles['last-ticket-card__from']}>
                    <p>{from.city.name}</p>
                    <p>{`${from['railway_station_name']} вокзал`}</p>
                </div>
                <div className={styles['last-ticket-card__to']}>
                    <p>{to.city.name}</p>
                    <p>{`${to['railway_station_name']} вокзал`}</p>
                </div>
            </div>
            <div className={styles['last-ticket-card__price']}>
                <div className={styles['last-ticket-card__options']}>
                    <div className={styles['train-options__icon']}><AiOutlineWifi /></div>
                    {/* <div className={styles['train-options__icon']}><MdRocketLaunch /></div> */}
                    <div className={styles['train-options__icon']}><RiCupFill /></div>
                </div>
                <div className={styles['last-ticket-card__price']}>
                    <p>{`от ${data['min_price']}`}</p>
                </div>
            </div>
        </div>
    )
};

export default LastTicketCard;
