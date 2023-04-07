import styles from './SchemeThirdClass.module.scss';
import { useState, useEffect } from 'react';

import cn from 'classnames';
import uniqid from 'uniqid';

const SchemeThirdClass = (props) => {
    const { data } = props;
    const [activePlaces, setActivePlaces] = useState([]);
    const [coupe, setCoupe ] = useState([]);

    useEffect(() => {
        const coupeSize = 4;
        const sideCoupeSize = 2;
        const coupeCount = data.length / (coupeSize + sideCoupeSize);
        const mainPlaces = data.slice(0, coupeSize * coupeCount);
        const sidePlaces = data.slice(coupeSize * coupeCount);
        const resMainPlaces = mainPlaces.reduce((p,c)=>{
            if(p[p.length-1].length === coupeSize){
              p.push([]);
            }
            
            p[p.length-1].push(c);
            return p;
          }, [[]]);

        const resSidePlaces = sidePlaces.reduce((p,c)=>{
            if(p[p.length-1].length === 2){
              p.push([]);
            }
            
            p[p.length-1].push(c);
            return p;
        }, [[]]);

        const res = resMainPlaces.map((item, index) => {
            return (
                {
                    main: item,
                    side: resSidePlaces[index]
                }
            );
        });

        setCoupe(res);
    }, [data]);

    function removePlace (index) {
        const updateState = activePlaces.filter((item) => item !== index);
        setActivePlaces( updateState ); 
    }

    function addPlace(index) {
        setActivePlaces( prev => [...prev, index] );
    }

    return (
            <div className={styles['scheme']}>
                {coupe ? coupe.map(({main, side}) => {
                    
                    return (
                        <div key={uniqid()} className={styles['coupe']}>
                            <div className={styles['top-block']}>
                                {main.map( ({ index, available }) => {
                                    return (
                                        <div 
                                        key={uniqid()}
                                        className={cn(styles['place'], styles['place-main'], !available ? styles.busy : (
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
                                {side.map(({ index, available }) => {
                                    return (
                                        <div 
                                        key={uniqid()}
                                        className={cn(styles['place'], styles['place-side'], !available ? styles.busy : (
                                            activePlaces.includes(index) ? cn(styles.active, styles.free) : styles.free 
                                        ))}
                                        onClick={() => activePlaces.includes(index) ? removePlace(index) :  addPlace(index)}
                                        >
                                            {index}
                                        </div>  
                                    )
                                })}
                            </div>
                        </div>
                    )
                }) : null}
            </div>    

    )

}

export { SchemeThirdClass };
