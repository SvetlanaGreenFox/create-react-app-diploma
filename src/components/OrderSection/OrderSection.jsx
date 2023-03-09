import OrderHeader from './OrderHeader';
import FooterSection from '../FooterSection';
import Steps from './Steps';

import styles from './OrderSection.module.scss';


const OrderSection = () => {
    console.log()
    return (
        <section className={styles.orderSection}>
            <OrderHeader />
            <Steps />
            <FooterSection />
        </section>
    )
}

export { OrderSection };
