import AboutSectionHeader from "./components/AboutSectionHeader";
import AboutSectionHContent from "./components/AboutSectionContent";

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
