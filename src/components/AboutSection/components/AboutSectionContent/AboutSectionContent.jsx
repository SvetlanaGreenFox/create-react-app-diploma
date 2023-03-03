import styles from "./AboutSectionContent.module.scss";
import cx from "classnames";

const AboutSectionHContent = () => {
    return (
        <section className={styles.aboutSectionContent}>
            <div className={styles.aboutDescription}>
                <p className={styles.aboutDescription__item}>Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем 
                все больше людей заказывают жд билеты через интернет.
                </p>
                <p className={styles.aboutDescription__item}>Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? 
                Мы расскажем о преимуществах заказа через интернет.
                </p>
                <p className={ cx(styles.aboutDescription__item, styles['aboutDescription__item_bold']) }>Покупать жд билеты дешево можно за 90 суток до отправления поезда. 
                Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
                </p>
            </div>
        </section>
    )
}

export { AboutSectionHContent };