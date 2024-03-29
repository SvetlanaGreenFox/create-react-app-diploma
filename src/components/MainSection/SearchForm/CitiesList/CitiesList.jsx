import styles from './CitiesList.module.scss';

const CitiesList = ({ cities, selectCity }) => {
    return(
        <div className={cities.length > 0 ? styles.test : styles.hidden}>
            <ul>
                { cities.map((city) => {
                    return (<li 
                        key={city['_id']} 
                        className={styles['citiesList__item']} 
                        onClick={() => selectCity(city)}>
                    { city.name }
                    </li>)}
                )
                }
            </ul>
        </div>
    )
};

export { CitiesList };
