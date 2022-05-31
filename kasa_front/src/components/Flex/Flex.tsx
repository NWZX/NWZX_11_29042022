import React from 'react';
import { MediaQuerySelector, ResponsiveCSSProperties } from 'contexts/DataContext';
import './Flex.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    direction?: React.CSSProperties['flexDirection'] | ResponsiveCSSProperties<React.CSSProperties['flexDirection']>;
    justifyContent?:
        | React.CSSProperties['justifyContent']
        | ResponsiveCSSProperties<React.CSSProperties['justifyContent']>;
    alignItems?: React.CSSProperties['alignItems'] | ResponsiveCSSProperties<React.CSSProperties['alignItems']>;
    gap?: React.CSSProperties['gap'] | ResponsiveCSSProperties<React.CSSProperties['gap']>;
}

const Flex: React.FC<Props> = ({ children, className, direction, justifyContent, alignItems, gap, ...props }) => {
    return (
        <div
            {...props}
            className={className ? 'flex_element ' + className : 'flex_element'}
            style={{
                flexDirection: MediaQuerySelector(direction),
                justifyContent: MediaQuerySelector(justifyContent),
                alignItems: MediaQuerySelector(alignItems),
                gap: MediaQuerySelector(gap),
                ...props.style,
            }}
        >
            {children}
        </div>
    );
};

export default Flex;
