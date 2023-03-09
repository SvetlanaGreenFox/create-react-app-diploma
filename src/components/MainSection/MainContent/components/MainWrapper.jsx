import SloganTitle from "./SloganTitle/index";
import SearchForm from "./SearchForm/index";
import styles from "./MainWrapper.module.scss";

const MainWrapper = () => {
    return(
        <section className={styles.mainWrapper}>
            <SloganTitle/>
            <SearchForm />
        </section>
    ) 
        
    
}

export { MainWrapper };