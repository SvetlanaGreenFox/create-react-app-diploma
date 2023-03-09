import HowItWorkHeader from "./components/HowItWorkHeader";
import HowItWorkContent from "./components/HowItWorkContent";
import styles from "./HowItWorkSection.module.scss";

const HowItWorkSection = () => {
    return (
        <section id='howItWork' className={styles.howItWorkSection}>
            <HowItWorkHeader />
            <HowItWorkContent />
        </section>
    )
}

export { HowItWorkSection };
