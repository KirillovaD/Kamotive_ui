import React, { FC } from 'react';
import styles from '../Icons.module.css';

export const IconAccount10: FC<{ color?: string; htmlColor?: string; strokeWidth?: string }> = ({
  color = 'inherit',
  htmlColor,
  strokeWidth,
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.icon} ${color && styles[color]}`}
    >
      <path
        fill={htmlColor || 'currentColor'}
        stroke={htmlColor || 'currentColor'}
        strokeWidth={strokeWidth || '0'}
        d="M11.5,14C15.64,14 19,15.57 19,17.5V20H4V17.5C4,15.57 7.36,14 11.5,14M18,17.5C18,16.12 15.09,15 11.5,15C7.91,15 5,16.12 5,17.5V19H18V17.5M11.5,5C13.43,5 15,6.57 15,8.5C15,10.43 13.43,12 11.5,12C9.57,12 8,10.43 8,8.5C8,6.57 9.57,5 11.5,5M11.5,6C10.12,6 9,7.12 9,8.5C9,9.88 10.12,11 11.5,11C12.88,11 14,9.88 14,8.5C14,7.12 12.88,6 11.5,6Z"
      />
    </svg>
  );
};
