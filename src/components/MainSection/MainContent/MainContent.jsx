// import SloganTitle from "./components/SloganTitle";
// import SearchForm from "./components/SearchForm";
import MainWrapper from "./components/index";
import styles from "./MainContent.module.scss";

const MainContent = () => {
    return(
        <section className={styles.mainContent}>
            {/* <SloganTitle/>
            <SearchForm /> */}
            <MainWrapper/>
        </section>
    ) 
        
    
}

export { MainContent };
