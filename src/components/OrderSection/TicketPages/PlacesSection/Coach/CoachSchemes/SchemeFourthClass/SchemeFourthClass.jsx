import styles from './SchemeFourthClass.module.scss';
import { useState, useEffect } from 'react';

import cn from 'classnames';
import uniqid from 'uniqid';

const SchemeFourthClass = (props) => {

    const { data } = props;
    console.log(data);

    const [activePlaces, setActivePlaces] = useState([]);
    const [coupe, setCoupe ] = useState({
        rightRow: [],
        leftRow: [],  
    });

    function flipPlaces (arr) {
        const splitPairs = arr.reduce((p,c)=>{
            if(p[p.length-1].length === 2){
              p.push([]);
            }
            
            p[p.length-1].push(c);
            return p;
        }, [[]]);
        
        const changePlace = splitPairs.map((item) => {
            return item.length > 1 ? [item[0], item[1]] = [item[1], item[0]] : item;
        });

        return changePlace.flat();
    }

    useEffect(() => {
        const rightRowSize = Math.ceil(data.length / 4) * 2 ; //по схеме верхний ряд(правый по направлению движения) сидений имеет четное число
        
        //изменения порядка мест в соответсвии со схемой верхнего ряда 
        const seatsRightRow = 
            data.slice(0, rightRowSize);
            // .reduce((p,c)=>{
            //     if(p[p.length-1].length === 2){
            //       p.push([]);
            //     }
            //     p[p.length-1].push(c);
            //     return p;
            // }, [[]])
            // .map((item) => {
            //     return item.length > 1 ? [item[0], item[1]] = [item[1], item[0]] : item;
            // })
            // .flat();

        const seatsLeftRow = data.slice(rightRowSize);

        setCoupe(prev => ({...prev, rightRow: seatsRightRow, leftRow: seatsLeftRow}))
        
    }, [data]);

    function removePlace (index) {
        const updateState = activePlaces.filter((item) => item !== index);
        setActivePlaces( updateState ); 
    }

    function addPlace(index) {
        setActivePlaces( prev => [...prev, index] );
    }

    console.log(coupe);
    return (
            <div className={styles['scheme']}>
                <div className={styles['top-block']}>
                    {coupe.rightRow.map(({ index, available }) => {
                        return (
                            <div 
                            key={uniqid()}
                            className={cn(styles.place, !available ? styles.busy : (
                                activePlaces.includes(index) ? cn(styles.active, styles.free) : styles.free 
                            ))}
                            onClick={() => activePlaces.includes(index) ? removePlace(index) :  addPlace(index)}
                            >
                                {index}
                            </div> 
                        )
                    })}
                </div>
                <div className={styles['bottom-block']}>
                    {coupe.leftRow.map(({ index, available }) => {
                            return (
                                <div 
                                key={uniqid()}
                                className={cn(styles.place, !available ? styles.busy : (
                                    activePlaces.includes(index) ? cn(styles.active, styles.free) : styles.free 
                                ))}
                                onClick={() => activePlaces.includes(index) ? removePlace(index) :  addPlace(index)}
                                >
                                    {index}
                                </div> 
                            )
                        })}
                </div>
                {/* {coupe ? coupe.map((item) => {+
                    return (
                        <div key={uniqid()} className={styles['coupe']}>
                            <div className={styles['top-block']}>
                                {item.map( ({ index, available }) => {
                                    return (
                                        <div 
                                        key={uniqid()}
                                        className={cn(styles.place, !available ? styles.busy : (
                                            activePlaces.includes(index) ? cn(styles.active, styles.free) : styles.free 
                                        ))}
                                        onClick={() => activePlaces.includes(index) ? removePlace(index) :  addPlace(index)}
                                        >
                                            {index}
                                        </div>  
                                    )
                                })}
                            </div>
                            
                            <div className={styles['central-block']}>
                                <p className={styles['text-hidden']}>---</p>
                            </div>
                            <div className={styles['bottom-block']}>
                                <p className={styles['text-hidden']}>---</p>
                            </div>
                        </div>
                    )
                }) : null} */}
            </div>    

    )

};

export { SchemeFourthClass };
