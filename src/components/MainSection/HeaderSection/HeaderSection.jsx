// import SloganTitle from "./components/SloganTitle";
// import SearchForm from "./components/SearchForm";
// import MainWrapper from "./components/index";
import styles from "./HeaderSection.module.scss";
import SearchForm from "./SearchForm";
import SloganTitle from "./SloganTitle";

const HeaderSection = () => {
    return(
        <section className={styles['header-section']}>
            <div className={styles['header-section__content']}>
                <SloganTitle />
                <SearchForm />
            </div>
        </section>
    ) 
        
    
}

export { HeaderSection };
