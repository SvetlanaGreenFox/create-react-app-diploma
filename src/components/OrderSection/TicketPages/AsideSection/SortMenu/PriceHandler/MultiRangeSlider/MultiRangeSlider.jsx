import styles from './MultiRangeSlider.module.scss';

import { useState, useRef, useCallback, useEffect } from 'react';

import cn from 'classnames';



const MultiRangeSlider = ({ min, max }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);

    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const parentRef = useRef(null);
    const maxRef = useRef(null);

    const range = useRef(null);
    
    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100), [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
    if (maxValRef.current) {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(+maxValRef.current.value); 

        if (range.current) {
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
        
        if (maxPercent - minPercent > 20 && maxPercent - minPercent < 80){
            valueMaxRef = valueMaxRef;
        }
        if (maxPercent - minPercent >= 80) valueMaxRef = `75%`;
        if (maxPercent - minPercent < 20) valueMaxRef = `15%`;
            maxRef.current.style.left = valueMaxRef;
        }
    }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        setMaxVal(min * 2);
    }, [min, max]);

    return (
        <div >
            <div className={styles.header}>
                <p>от</p>
                <p>до</p>
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
                    className={cn(styles['thumb'], styles['thumb--zindex-3'], {
                        "thumb--zindex-5": minVal > max - 100
                    })}
                />
                <input
                    type="range"
                    min={ min }
                    max={ max }
                    value={maxVal}
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
                    <div className={styles['slider__left-value']}>{minVal}</div>
                    <div ref={ maxRef } className={styles['slider__right-value']}>{maxVal}</div>
                    <div className={styles['slider__max-value']}>{max}</div>
                </div>
            </div>
        </div>
    )
};

export { MultiRangeSlider };