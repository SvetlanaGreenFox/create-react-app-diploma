// import SloganTitle from "./components/SloganTitle";
// import SearchForm from "./components/SearchForm";
import MainWrapper from "./components/index";
import styles from "./HeaderSection.module.scss";

const HeaderSection = () => {
    return(
        <section className={styles.mainContent}>
            <MainWrapper/>
            <div className={styles.mainContent__wrapper}></div>
        </section>
    ) 
        
    
}

export { HeaderSection };
