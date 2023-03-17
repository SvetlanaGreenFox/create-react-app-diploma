import styles from './CitiesList.module.scss';

const CitiesList = ({ cities, selectCity }) => {
    // console.log(cities);
    return(
        <div className={cities.length > 0 ? styles.test : styles.hidden}>
            <ul>
                { cities.map((city) => {
                    return (<li 
                        key={city['_id']} 
                        className={styles['citiesList__item']} 
                        onClick={() => console.log('1')}>
                    { city.name }
                    </li>)}
                )
                }
            </ul>
        </div>
    )
};

export default CitiesList;
