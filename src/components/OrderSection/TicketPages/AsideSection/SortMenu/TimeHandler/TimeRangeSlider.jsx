import styles from './TimeRangeSlider.module.scss';

import { useState, useRef, useCallback, useEffect } from 'react';

import cn from 'classnames';

const TimeRangeSlider = ({ min, max }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const [minTime, setMinTime] = useState();
    const [maxTime, setMaxTime] = useState();

    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const parentRef = useRef(null);
    const maxRef = useRef(null);

    const range = useRef(null);
    
    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100), [min, max]
    );


    const minuteToTime = (value) => {
        value = (value > 1439) ? 1439 : value;
        let hours = Math.floor(value / 60),
        minutes = value - (hours * 60);
        
        if (`${hours}`.length === 1) hours = '0' + hours;
        if (`${minutes}`.length === 1) minutes = '0' + minutes;
        if (minutes === 0) minutes = '00';
            
        return {hours: hours, minutes: minutes};
    }
    
    useEffect(() => {
    if (maxValRef.current) {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(+maxValRef.current.value); 
        
        if (range.current) {
            const prepareTime = `${minuteToTime(minVal).hours}:${minuteToTime(minVal).minutes}`;
            setMinTime(prepareTime);
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) { 
            range.current.style.width = `${maxPercent - minPercent}%`;
            let valueMaxRef = `${maxPercent - minPercent - 5}%`;
            
            const prepareTime = `${minuteToTime(maxVal).hours}:${minuteToTime(maxVal).minutes}`;
            setMaxTime(prepareTime);
            
            // if (maxPercent - minPercent > 20 && maxPercent - minPercent < 75) valueMaxRef;
            if (maxPercent - minPercent >= 75) valueMaxRef = `70%`;
            if (maxPercent - minPercent < 20) valueMaxRef = `15%`;
                maxRef.current.style.left = valueMaxRef;
            }
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        // setMaxVal(min * 2);
    }, [min, max]);

    return (
        <div >
            <div className={styles.header}>
                <p>Время отбытия</p>
            </div>
            <div className={styles.container}>
                <input
                    type="range"
                    min={ min }
                    max={ max }
                    value={minVal}
                    ref={minValRef}
                    onChange={(event) => {
                        const value = Math.min(+event.target.value, maxVal - 1);
                        setMinVal(value);
                        event.target.value = value.toString();
                    }}
                    className={cn(styles['thumb'], styles['thumb--zindex-3'])}
                />
                <input
                    type="range"
                    min={ min }
                    max={ max }
                    value={ maxVal }
                    ref={ maxValRef }
                    onChange={(event) => {
                        const value = Math.max(+event.target.value, minVal + 1);
                        setMaxVal(value);
                        event.target.value = value.toString();
                    }}
                    className={cn(styles['thumb'], styles['thumb--zindex-4'])}
                />
                <div ref={ parentRef } className={styles['slider']}>
                    <div className={styles['slider__track']} />
                    <div className={styles['slider__range']} />
                    <div ref={ range } className={styles['slider__range']} />
                    <div className={styles['slider__left-value']}>{minTime}</div>
                    <div ref={ maxRef } className={styles['slider__right-value']}>{maxTime}</div>
                    <div className={styles['slider__max-value']}>24:00</div>
                </div>
            </div>
        </div>
    )
};

export default TimeRangeSlider;