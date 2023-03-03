import AdvantageCard from "./AdvantageCard";

import styles from "./HowItWorkContent.module.scss";
import { FaDesktop } from "react-icons/fa";

const HowItWorkContent = () => {
    return (
        <section className={styles.howItWorkContent}>
            <div className={styles.howItWorkContent__cards}>
                <AdvantageCard text='Удобный заказ на сайте'>
                    <FaDesktop />
                </AdvantageCard>
                <AdvantageCard text='Нет необходимости ехать в офис'>
                    <FaDesktop />
                </AdvantageCard>
                <AdvantageCard text='Огромный выбор направлений'>
                    <FaDesktop />
                </AdvantageCard> 
            </div>
        </section>
    )
}

export { HowItWorkContent };