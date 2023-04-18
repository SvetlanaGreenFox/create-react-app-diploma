import styles from './TimeHandler.module.scss';

import TimeRangeSlider from './TimeRangeSlider';
// import MultiRangeSlider from '../PriceHandler/MultiRangeSlider';


const TimeHandler = () => {

    return (
        <div className={styles['wrapper']}>
            <div className={styles['time-wrapper__item']}>
                <TimeRangeSlider
                    max={1439}
                    min={0}
                />
            </div>
            <div className={styles['time-wrapper__item']}>fbffb</div>
        </div>
    )
};

export { TimeHandler };
