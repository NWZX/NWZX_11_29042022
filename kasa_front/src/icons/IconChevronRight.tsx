import React from 'react';
import { IIconProps } from 'interfaces/IIconProps';

const IconChevronRight = (props: IIconProps): JSX.Element => {
    return (
        <svg {...props} viewBox="0 0 48 80" fill={props.color} focusable="false" aria-hidden="true">
            <path
                d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                fill={props.color as string | undefined}
            />
        </svg>
    );
};

export default IconChevronRight;
