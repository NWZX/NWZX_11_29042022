import React from 'react';
import './Box.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Box: React.FC<Props> = ({ children, ...props }) => {
    return <div {...props}>{children}</div>;
};

export { Box };
