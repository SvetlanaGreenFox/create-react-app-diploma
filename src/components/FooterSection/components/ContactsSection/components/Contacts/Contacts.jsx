import Title from '../Title';
import phone from '../../../../../../assets/ContactsIcons/phone.png';
import mail from '../../../../../../assets/ContactsIcons/mail.png';
import skype from '../../../../../../assets/ContactsIcons/skype.png';
import point from '../../../../../../assets/ContactsIcons/point.png';
import { Link } from "react-router-dom";
// import cx from "classnames";

import styles from './Contacts.module.scss';

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <div className={styles['contact-card__title']}>
                <Title title={'Свяжитесь с нами'}/>
            </div>
            <div className={styles['contact-card']}>
                <Link to="tel:88000000000" className={styles['contact-card__wrapper']}>
                    <div className={styles['icon-wrapper']}>
                        <img className={styles['contact-card__icon']} src={phone} alt="phone number"/>
                    </div>
                    <p className={styles['contact-card__description']}>8 (800) 000 00 00</p> 
                </Link>
            </div>
            <div className={styles['contact-card']}>
                <Link to="mail:inbox@mail.ru" className={styles['contact-card__wrapper']}>
                    <div className={styles['icon-wrapper']}>
                        <img className={styles['contact-card__icon']} src={mail} alt="mail"/>
                    </div>
                    <p className={styles['contact-card__description']}>inbox@mail.ru</p> 
                </Link>
            </div>
            <div className={styles['contact-card']}>
                <Link to="skype:tu.train.tickets" className={styles['contact-card__wrapper']}>
                    <div className={styles['icon-wrapper']}>
                        <img className={styles['contact-card__icon']} src={skype} alt="skype"/>
                    </div>
                    <p className={styles['contact-card__description']}>tu.train.tickets</p> 
                </Link>
            </div>
            <div className={styles['contact-card']}>
                <Link to="/" className={styles['contact-card__wrapper']}>
                    <div className={styles['icon-wrapper']}>
                        <img className={styles['contact-card__icon']} src={point} alt="point on the map"/>
                    </div>
                    <p className={styles['contact-card__description']}>г. Москва ул. Московская 27-35555 555</p> 
                </Link>
            </div>
        </section>
    )
}

export { Contacts };
