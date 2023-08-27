import React, { forwardRef, ForwardedRef, ReactNode, CSSProperties, ButtonHTMLAttributes } from 'react';
import styles from './index.module.css';

interface ClapContainerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: CSSProperties;
}

const ClapContainer = forwardRef<HTMLButtonElement, ClapContainerProps>(
  (
    { children, handleClick, className, style: userStyles = {}, ...restProps },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const classNames = [styles.clap, className].join(' ').trim();

    return (
      <button
        onClick={handleClick}
        className={classNames}
        style={userStyles}
        ref={ref}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);

export default ClapContainer;
