import styles from './SchemeSecondClass.module.scss';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import uniqid from 'uniqid';
// import { updateLocale } from 'moment/moment';

const SchemeSecondClass = (props) => {
    // console.log('data', props);
    const { data } = props;

    const coupeSize = 4;

    const [activePlaces, setActivePlaces] = useState([]);
    const [coupe, setCoupe ] = useState([]);

    useEffect(() => {
        const res = data.reduce((p,c)=>{
            if(p[p.length-1].length === coupeSize){
              p.push([]);
            }
            
            p[p.length-1].push(c);
            return p;
          }, [[]]);

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
                {coupe ? coupe.map((item) => {
                    
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
                }) : null}
            </div>    

    )
}

export { SchemeSecondClass };
