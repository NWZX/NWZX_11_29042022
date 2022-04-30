import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconChevronRight = (props: IconProps): JSX.Element => {
    return (
        <Icon {...props} viewBox="0 0 48 80" fill={props.color}>
            <path
                d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                fill={props.color as string | undefined}
            />
        </Icon>
    );
};

export default IconChevronRight;
