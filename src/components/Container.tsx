import React, { ReactNode } from 'react';
import './Container.css';

export interface ContainerProps {
  children: ReactNode;
  style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <div className="mikto-container" style={style}>
      {children}
    </div>
  );
};
