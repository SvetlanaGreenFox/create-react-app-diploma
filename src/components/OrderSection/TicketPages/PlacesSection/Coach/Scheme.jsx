import styles from './Scheme.module.scss';
import { useState, useEffect } from 'react';
import cn from 'classnames';

const Scheme = (props) => {
    // console.log('data', props);
    const { data } = props;

    const coupeSize = 4;

    const [activePlace, setActivePlace] = useState(null);
    const [coupe, setCoupe ] = useState([]);

    useEffect(() => {
        const res = data.reduce((p,c)=>{
            if(p[p.length-1].length == coupeSize){
              p.push([]);
            }
            
            p[p.length-1].push(c);
            return p;
          }, [[]]);

        setCoupe(res);
    }, [data]);

    console.log(activePlace);
    function selectPlace(idx) {
        console.log(idx);
    }

     

    return (
            <div className={styles['scheme']}>
                {coupe ? coupe.map((item) => {
                    // console.log('item', item[1]);
                    
                    return (
                        <div className={styles['coupe']}>
                            <div className={styles['top-block']}>
                                {item.map( ({ index, available }) => {
                                    return (
                                        <div 
                                        className={cn(styles.place, !available ? styles.busy : (
                                            activePlace === index ? cn(styles.active, styles.free) : styles.free
                                        ))}
                                        onClick={() => setActivePlace(index)}
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

export default Scheme;
