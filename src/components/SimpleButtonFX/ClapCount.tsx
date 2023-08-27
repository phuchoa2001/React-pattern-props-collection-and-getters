import { forwardRef, ForwardedRef  } from 'react';
import styles from './index.module.css';

interface ClapCountProps {
  count: number;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

const ClapCount = forwardRef(
  (
    { count, className = '', style: userStyles = {}, ...restProps }: ClapCountProps,
    ref: ForwardedRef<HTMLSpanElement>
  ) => {
    const classNames = [styles.count, className].join(' ').trim();

    return (
      <span ref={ref} className={classNames} style={userStyles} {...restProps}>
        +{count}
      </span>
    );
  }
);

export default ClapCount;
