import styles from './CitiesList.module.scss';

import { useState, useEffect } from 'react';

const CitiesList = ({ cities, selectCity }) => {
    console.log(cities);
    // const [ state, setState ] = useState([]);

    // useEffect(() => {
    //     console.log(cities);
    //     setState(cities);
    // }, [cities]);

    return(
        <div className={cities.length > 0 ? styles.test : styles.hidden}>
            <ul>
                { cities.map((city) => {
                    return (<li 
                        key={city['_id']} 
                        className={styles['citiesList__item']} 
                        onClick={() => selectCity(city['_id'])}>
                    { city.name }
                    </li>)}
                )
                }
            </ul>
        </div>
    )
};

export default CitiesList;
