import { Link } from "react-router-dom";
// import { useRef } from "react";
import styles from "./Header.module.scss";

const Header = () => {
    console.log(styles);
    return (
        <section className={styles.header}>
            <div className={styles.logoWrapper}><a href="/" className={styles.logo}>Logo</a>
            </div>
            <nav className={styles.navigator}>
                <li className={styles.navigator__list}>
                    <Link to='/about' className={styles.navigator__item}> О нас </Link>
                    <Link to='/howitwork' className={styles.navigator__item}> Как это работает </Link>
                    <Link to='/feedback' className={styles.navigator__item}> Отзывы </Link>
                    <Link to='/contacts' className={styles.navigator__item}> Контакты </Link>
                </li>
            </nav>
        </section>
    )
}

export { Header };
