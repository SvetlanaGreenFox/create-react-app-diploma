import styles from './TimeCard.module.scss';
import moment from "moment/moment";

const TimeCard = ({ data }) => {
    const time = moment(data.datetime * 1000).format("hh:mm");
    
    return (
        <div className={styles['time-card']}>
            <p className={styles['time-card__time']}>{ time }</p>
            <p className={styles['time-card__city']}>{ data.city.name }</p>
            <p className={styles['time-card__railway']}>{ `${data['railway_station_name']} вокзал`}</p>
        </div>
    )
}

export default TimeCard;
