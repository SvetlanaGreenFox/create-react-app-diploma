import styles from "./HeaderSection.module.scss";
import cx from 'classnames';

const HeaderSection = (props) => {
    console.log(props.mainStyles);
    return(
        <section className={cx(styles['header-section'], props.mainStyles)}>
            <div className={styles['header-section__content']}>
                {props.children}
            </div>
        </section>
    ) 
        
    
}

export { HeaderSection };
