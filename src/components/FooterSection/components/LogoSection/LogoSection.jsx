import styles from './LogoSection.module.scss';
import { FaArrowUp } from 'react-icons/fa';

const LogoSection = () => {
    return (
        <section className={styles.logoSection}>
            <div className={styles.logoSection__items}>
                <div className={styles['logoSection__logo-wrapper']}>
                    <a className={styles.logo} href='/'>Logo</a>
                </div>
                <div className={styles['logoSection__arrowUp-wrapper']}>
                    <FaArrowUp className={styles.arrowUp} />
                </div>
                <div className={styles['license-wrapper']}>
                    <p className={styles.license__description}>2018 web</p>
                </div>
            </div>
        </section>
    )
}

export { LogoSection };
