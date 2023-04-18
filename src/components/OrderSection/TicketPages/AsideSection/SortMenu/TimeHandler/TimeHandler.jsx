import styles from './TimeHandler.module.scss';

import TimeRangeSlider from './TimeRangleSlider/TimeRangeSlider';
// import MultiRangeSlider from '../PriceHandler/MultiRangeSlider';
import cn from 'classnames';


const TimeHandler = () => {

    return (
        <div className={styles['wrapper']}>
            <div className={styles['time-wrapper__item']}>
                <div className={cn(styles.header, styles['header_left'])}>
                    <p>Время отбытия</p>
                </div>
                <TimeRangeSlider
                    max={1439}
                    min={0}
                />
            </div>
            <div className={styles['time-wrapper__item']}>
                <div className={cn(styles.header, styles['header_right'])}>
                    <p>Время прибытия</p>
                </div>
                <TimeRangeSlider
                    max={1439}
                    min={0}
                />
            </div>
        </div>
    )
};

export { TimeHandler };
