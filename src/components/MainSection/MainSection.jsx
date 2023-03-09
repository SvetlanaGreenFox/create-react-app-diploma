import TicketsPage from '../OrderPages/TicketsPage';
import MainPage from "./MainPage"; 

import styles from "./MainSection.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

const MainSection = () => {
    const [state, setState] = useState(null);
  
    function handlerState (e) {
        setState(e.target.name);
    }

    return (
        <div>
            <section className={styles.header}>
                <div className={styles.logoWrapper}><a href="/" className={styles.logo}>Logo</a>
                </div>
                <nav className={styles.navigator}>
                    <li className={styles.navigator__list}>
                        <Link name='about' to='/' onClick={handlerState} className={styles.navigator__item}> О нас </Link>
                        <Link name='howItWork' to='/' onClick={handlerState} className={styles.navigator__item}> Как это работает </Link>
                        <Link name='feedback' to='/' onClick={handlerState} className={styles.navigator__item}> Отзывы </Link>
                        <Link name='contacts' to='/' onClick={handlerState} className={styles.navigator__item}> Контакты </Link>
                    </li>
                </nav>
            </section>

        <Routes>
            <Route path='/' exact element={ <MainPage elem={state} /> }/>
            <Route path='/tickets' element={ <TicketsPage /> }/>
        </Routes>
        </div>
    );
}

export { MainSection };
