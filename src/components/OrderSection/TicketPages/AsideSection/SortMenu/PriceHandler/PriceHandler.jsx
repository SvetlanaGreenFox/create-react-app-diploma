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

// const PriceHandler = () => {
//   const [leftVal, setLeftVal] = useState(2500);
//   // состояние для правого
//   const [rightVal, setRightVal] = useState(7500);
//   //  Константы для ограничения макс и минимального значения
//   const MINVAL = 0;
//   const MAXVAL = 10000;
//   return (
//     <div className={styles['price-wrapper']}>
//       <div className={styles.slider}>
//         <div className={styles.slider__progress} />
//       </div>
//       <div className={styles['range']}>
//         <input
//           className={styles.range__input}
//           type="range"
//           name="range-min"
//           min={MINVAL}
//           max={MAXVAL}
//           value={leftVal}
//           onChange={(e) => setLeftVal(parseInt(e.target.value))}
//         />
//         <input
//           type="range"
//           name="range-max"
//           min={MINVAL}
//           max={MAXVAL}
//           value={rightVal}
//           onChange={(e) => setRightVal(parseInt(e.target.value))}
//         />
//       </div>
//     </div>
//     )
//   }

export { PriceHandler };
