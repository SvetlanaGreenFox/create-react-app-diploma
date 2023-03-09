import AboutSectionHeader from "./components/AboutSectionHeader/index";
import AboutSectionHContent from "./components/AboutSectionContent/index";

import styles from "./AboutSection.module.scss";

const AboutSection = () => {
    return ( 
        <section id='about'className={styles.aboutSection}>
            <AboutSectionHeader />
            <AboutSectionHContent />
        </section>
    )
}

export { AboutSection };
