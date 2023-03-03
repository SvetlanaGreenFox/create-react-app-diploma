import Header from "./Header";
import MainContent from "./MainContent";
import styles from "./MainSection.module.scss";

const MainSection = () => {
    return (
        <section className={styles.mainSection}>
            <Header />
            <MainContent />
        </section>
        
    )
}

export { MainSection };
