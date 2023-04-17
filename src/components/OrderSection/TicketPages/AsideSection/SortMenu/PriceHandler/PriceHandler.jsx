import styles from './PriceHandler.module.scss';
import MultiRangeSlider from './MultiRangeSlider';

import { useState } from 'react';
// import MultiRangeSlider from "multi-range-slider-react";

const PriceHandler = () => {
  return(
    <div className={styles['price-wrapper']}>
      <MultiRangeSlider
        min={1920}
        max={7000}
        //  onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
    </div>
  )
};

export { PriceHandler };
