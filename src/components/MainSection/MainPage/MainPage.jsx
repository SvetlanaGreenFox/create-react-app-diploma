import HeaderSection from "../HeaderSection";
import AboutSection from "../../AboutSection";
import HowItWorkSection from "../../HowItWorkSection";
import FeedbackSection from "../../FeedbackSection";
import FooterSection from "../../FooterSection";
import SearchForm from "../SearchForm";
import SloganTitle from "../SloganTitle";

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
            <HeaderSection mainStyles={styles.header}>
                <SloganTitle/>
                <SearchForm/>
            </HeaderSection>
            <AboutSection />
            <HowItWorkSection />
            <FeedbackSection />
            <FooterSection />        
        </section>
    )
}

export { MainPage };
