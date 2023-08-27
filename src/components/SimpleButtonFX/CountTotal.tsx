import React, { forwardRef, ForwardedRef, CSSProperties } from 'react';
import styles from './index.module.css';

interface CountTotalProps {
  countTotal: number;
  className?: string;
  style?: CSSProperties;
  [key: string]: any;
}

const CountTotal = forwardRef((
  { countTotal, className = '', style: userStyles = {}, ...restProps }: CountTotalProps,
  ref: ForwardedRef<HTMLSpanElement>
) => {
  const classNames = [styles.total, className].join(' ').trim();

  return (
    <span ref={ref} className={classNames} style={userStyles} {...restProps}>
      {countTotal}
    </span>
  );
});

export default CountTotal;
