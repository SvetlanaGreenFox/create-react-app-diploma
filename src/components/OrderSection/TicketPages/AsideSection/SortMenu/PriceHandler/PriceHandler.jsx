import styles from './PriceHandler.module.scss';
import MultiRangeSlider from './MultiRangeSlider';

import { useState } from 'react';

const PriceHandler = () => {
  return(
    <div className={styles['price-wrapper']}>
      <MultiRangeSlider
        min={1920}
        max={7000}
      />
    </div>
  )
};

export { PriceHandler };
