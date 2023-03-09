import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import { useState, useEffect } from "react";

// import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
    // const [state, setState] = useState('');
    const [scroll, setScroll] = useState ({x: 0, y: 0});

    function handlerState (e) {
        console.log(`Hi ${e.target.name}`);
        // setState(e.target.name);
        // window.scrollTo(0, .scrollHeight)
        // console.log(state)
        let a = document.getElementById(e.target.name);
        console.log(`Ho ${a}`);
        // let rect = a.getBoundingClientRect().top;
        //     console.log(a);
        //     setScroll((state) => ({...state, y: rect }))
        //     console.log(scroll.y)
        //     window.scrollTo(0, rect.top);
    }

    // useEffect(() => {
    //     let a = setTimeout(() => {
    //        console.log(scroll.y);
    //        window.scrollTo(scroll.x, scroll.y) 
    //     }, 1000);
    //     return (() => clearTimeout(a))
    // }, [scroll]);

    return (
        <section className={styles.header}>
            <div className={styles.logoWrapper}><a href="/" className={styles.logo}>Logo</a>
            </div>
            <nav className={styles.navigator}>
                <li className={styles.navigator__list}>
                    <Link name='about' to='/' onClick={handlerState} className={styles.navigator__item}> О нас </Link>
                    <Link className={styles.navigator__item}> Как это работает </Link>
                    <Link className={styles.navigator__item}> Отзывы </Link>
                    <Link className={styles.navigator__item}> Контакты </Link>
                    {/* <AnchorLink href='#about' className={styles.navigator__item}> О нас </AnchorLink>
                    <AnchorLink href='#howIt' className={styles.navigator__item}> Как это работает </AnchorLink>
                    <AnchorLink href='#feedback' className={styles.navigator__item}> Отзывы </AnchorLink>
                    <AnchorLink href='#contacts' className={styles.navigator__item}> Контакты </AnchorLink> */}
                </li>
            </nav>
        </section>
    )
}

export { Header };
