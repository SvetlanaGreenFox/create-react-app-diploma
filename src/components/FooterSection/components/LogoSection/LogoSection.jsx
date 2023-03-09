import styles from './LogoSection.module.scss';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LogoSection = () => {
    return (
        <section className={styles.logoSection}>
            <div className={styles.logoSection__items}>
                <div className={styles['logoSection__logo-wrapper']}>
                    <Link className={styles.logo} to='/'>Logo</Link>
                </div>
                <div className={styles['logoSection__arrowUp-wrapper']}>
                    <Link to='/'>
                        <FaArrowUp 
                            onClick={ () => window.scrollTo (
                                { top: 0,
                                  behavior: 'smooth',
                                }
                              )
                            } 
                            className={styles.arrowUp} 
                        />
                    </Link> 
                </div>
                <div className={styles['license-wrapper']}>
                    <p className={styles.license__description}>2018 web</p>
                </div>
            </div>
        </section>
    )
}

export { LogoSection };
