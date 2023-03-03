import styles from './Carousel.module.scss';

const Carousel = () => {
    return (
        <nav className={styles.carousel}>
            <input id="carousel__item-1" type="radio" name="carousel-dots"/>
            <label htmlFor="carousel__item-1">Go to item 1</label>

            <input id="carousel__item-2" type="radio" name="carousel-dots"/>
            <label htmlFor="carousel__item-2">Go to item 2</label>

            <input id="carousel__item-3" type="radio" name="carousel-dots"/>
            <label htmlFor="carousel__item-3">Go to item 3</label>

            <input id="carousel__item-4" type="radio" name="carousel-dots"/>
            <label htmlFor="carousel__item-4">Go to item 4</label>

            <input id="carousel__item-5" type="radio" name="carousel-dots"/>
            <label htmlFor="carousel__item-5">Go to item 5</label>

        </nav>
    )
}

export { Carousel };
