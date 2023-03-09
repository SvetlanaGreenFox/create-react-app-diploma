import Title from '../Title';
import { Link } from 'react-router-dom';
import { AiFillYoutube } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import { useState } from 'react';
import styles from './SocialNetwork.module.scss';

const SocialNetwork = () => {
    const [state, setState] = useState('');

    function handlerInpuit () {
        
    }
    
    return (
        <section className={styles.socialNetwork}>
            <div className={styles.socialNetwork__title}>
                <Title title={'Подписка'}/>
            </div>
            <form className={styles['subscription-form']}>
                <label className={styles['subscription-form__label']} htmlFor='subscription'>Будьте в курсе событий</label>
                <div className={styles['input-wrapper']}>
                    <input className={styles['subscription-form__input']} id='subscription' type='text' name='mail' placeholder='e-mail' />
                    <button className={styles['subscription-form__btn']}>Отправить</button>
                </div>
            </form>
            <div className={styles.socialNetwork__list}>
                <div className={styles.socialNetwork__title}>
                    <Title title={'Подписывайтесь на нас'}/>
                </div>
                <div className={styles['socialNetwork__list-wrapper']}>
                    <Link to='/'>
                        <AiFillYoutube className={styles.socialNetwork__icon}/>
                    </Link>
                    <Link to='/'>
                     <FaLinkedinIn className={styles.socialNetwork__icon}/>
                    </Link>
                    <Link to='/'>
                     <AiOutlineGooglePlus className={styles.socialNetwork__icon}/>
                    </Link>
                    <Link to='/'>
                     <FaFacebookF className={styles.socialNetwork__icon}/>
                    </Link>
                    <Link to='/'>
                     <FaTwitter className={styles.socialNetwork__icon}/>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export { SocialNetwork };
