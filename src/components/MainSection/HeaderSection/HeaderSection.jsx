import SloganTitle from "../SloganTitle";
import SearchForm from "../SearchForm";

import styles from "./HeaderSection.module.scss";

const HeaderSection = () => {
    return(
        <section className={ styles['header-section'] }>
        <div className={ styles['header-section__content'] }>
            <SloganTitle />
            <SearchForm />
        </div>
    </section>
    ) 
        
    
}

export { HeaderSection };
