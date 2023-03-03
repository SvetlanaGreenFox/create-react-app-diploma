import ContactsSection from './components/ContactsSection';
import LogoSection from './components/LogoSection';

import styles from './FooterSection.module.scss';

const FooterSection = () => {
    return (
        <footer className={styles.footerSection}>
            <div>
                <ContactsSection />
            </div>
            <div className={styles['footerSection__logo-wrapper']}>
                <LogoSection />
            </div>
        </footer>
    )
}

export { FooterSection };
