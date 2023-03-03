import Contacts from './components/Contacts';
import SocialNetwork from './components/SocialNetwork';

import styles from './ContactsSection.module.scss';

const ContactsSection = () => {
    return (
        <section className={styles.contactsSection}>
            <div className={styles.contactsSection__items}>
                <Contacts />
                <SocialNetwork />
            </div>
        </section>
    ) 
}

export { ContactsSection };
