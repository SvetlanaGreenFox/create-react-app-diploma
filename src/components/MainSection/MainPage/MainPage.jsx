import HeaderSection from "../HeaderSection";
import AboutSection from "../../AboutSection";
import HowItWorkSection from "../../HowItWorkSection";
import FeedbackSection from "../../FeedbackSection";
import FooterSection from "../../FooterSection";

import { useEffect } from "react";
import styles from './MainPage.module.scss';

const MainPage = (props) => {
    const { elem } = props;

    useEffect(() => {
        let a = setTimeout(() => {
           const topTargetElem = document.getElementById(elem).getBoundingClientRect().top; 
           window.scrollTo(0, topTargetElem); 
        }, 1000);

        return (() => clearTimeout(a))
    }, [elem]);

    return (
        <section className={styles.mainPage}>
            <HeaderSection />
            <AboutSection />
            <HowItWorkSection />
            <FeedbackSection />
            <FooterSection />        
        </section>
    )
}

export { MainPage };
