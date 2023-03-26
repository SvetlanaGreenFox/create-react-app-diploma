import HeaderSection from "../HeaderSection";
import AboutSection from "../../AboutSection";
import HowItWorkSection from "../../HowItWorkSection";
import FeedbackSection from "../../FeedbackSection";
import FooterSection from "../../FooterSection";

import { useEffect } from "react";

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
        <section>
            <HeaderSection />
            <AboutSection />
            <HowItWorkSection />
            <FeedbackSection />
            <FooterSection />        
        </section>
    )
}

export { MainPage };
